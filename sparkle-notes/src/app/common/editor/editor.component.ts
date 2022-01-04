import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Renderer2, Output, ViewChild } from '@angular/core';
import { COMMAND_DATA } from 'src/app/utilities/constants';
import { Color, Command, CommandActive, GroupCommandActive } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  @Input() theme?: Color;
  @ViewChild('editor', { static: false }) editorBar?: ElementRef;
  @Input() content = '';
  @Output() editorContent = new EventEmitter<string>()
  @Output() hasValue = new EventEmitter<boolean>()
  @Output() active = new EventEmitter<GroupCommandActive[]>()
  commands?: GroupCommandActive[];
  selection?:{start:number, end:number};

  constructor(private renderer: Renderer2) {
    let d: GroupCommandActive[] = []
    for (const [key, value] of Object.entries(COMMAND_DATA)) {
      let a = {} as GroupCommandActive;
      a.group = key;
      let c: CommandActive[] = [];
      value.forEach((data: Command) => {
        let b = {} as { cmd: string; active: boolean };
        b.cmd = data.cmd;
        b.active = false;
        c.push(b);
      });
      a.value = c;
      d.push(a);
      d.push({
        group: 'miscellneous', value: [{
          cmd: 'link',
          active: false
        }]
      })
    }
    this.commands = d;
  }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.editorBar?.nativeElement, 'innerHTML', this.content || '<span></span>');
  }

  setSelection() {
    let text = window.getSelection();
    this.selection= this.saveSelection(document.getElementById('editor')!)
    if (text?.type === 'Range') {
      this.getActive(text.getRangeAt(0).startContainer?.parentNode as HTMLElement);
      this.active.emit(this.commands);
    }
  }

  removeAll() {
    this.content = '<span > </span>';
    this.renderer.setProperty(this.editorBar?.nativeElement, 'innerHTML', '<span></span>');
    this.hasValue.emit(false);
  }

  getActive(parent: HTMLElement) {
    this.commands?.forEach((data) => {
      data.value.forEach((value) => {
        if (value.cmd === 'bold') {
          value.active = Number(window.getComputedStyle(parent).getPropertyValue('font-weight')) > 400;
        }
        if (value.cmd === 'italic') {
          value.active = window.getComputedStyle(parent).getPropertyValue('font-style') === 'italic'
        }
        if (value.cmd === 'underline') {
          value.active = parent?.style.getPropertyValue('text-decoration-line') === 'underline'
        }
        if (value.cmd === 'subscript') {
          value.active = parent?.style.getPropertyValue('vertical-align') === 'sub'
        }
        if (value.cmd === 'link') {
          console.log(parent?.getAttribute('href'))
          value.active = parent?.getAttribute('href') !== null;
        }
        if (value.cmd === 'superscript') {
          value.active = parent?.style.getPropertyValue('vertical-align') === 'super'
        }
        if (value.cmd === 'strikethrough') {
          value.active = parent?.style.getPropertyValue('text-decoration-line') === 'line-through'
        }
      });
    });
  }

  setContent(e: Event) {
    this.content = (e.target as HTMLInputElement)?.innerHTML
    this.editorContent.emit(this.content);
  }

  inputContent(e: Event) {
    let targetText = (e.target as HTMLInputElement).innerText;
    this.hasValue.emit(targetText ? true : false);
    if (targetText === '') {
      this.renderer.setProperty(this.editorBar?.nativeElement, 'innerHTML', '<span></span>');
    }
  }

  executeCommand(e: string, value?: string) {
    this.restoreSelection(document.getElementById('editor')!)
    let sel = window.getSelection();
    document.designMode = "on";
    document.execCommand('styleWithCSS', false, 'true');
    document.execCommand(e, false, value);
    document.designMode = "off";
    sel?.removeAllRanges();
  }

  saveSelection(containerEl: HTMLElement) {
    let doc = containerEl.ownerDocument, win = doc.defaultView;
    let range = win?.getSelection()?.getRangeAt(0);
    let preSelectionRange = range?.cloneRange();
    preSelectionRange?.selectNodeContents(containerEl);
    preSelectionRange?.setEnd(range!.startContainer, range!.startOffset);
    let start = preSelectionRange!.toString().length;

    return {
      start: start,
      end: start + range!.toString().length
    };
  }

  restoreSelection(containerEl:Node){
    let doc = containerEl.ownerDocument, win = doc!.defaultView;
    let charIndex = 0, range = doc!.createRange();
    range.setStart(containerEl, 0);
    range.collapse(true);
    let nodeStack = [containerEl], node:any, foundStart = false, stop = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType == Node.TEXT_NODE) {
        let nextCharIndex = charIndex + node.length;
        if (!foundStart && this.selection!.start >= charIndex && this.selection!.start <= nextCharIndex) {
          range.setStart(node, this.selection!.start - charIndex);
          foundStart = true;
        }
        if (foundStart && this.selection!.end >= charIndex && this.selection!.end <= nextCharIndex) {
          range.setEnd(node, this.selection!.end - charIndex);
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        var i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    let sel = win?.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }
}
