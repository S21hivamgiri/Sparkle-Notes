import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Renderer2, Output, ViewChild } from '@angular/core';
import { Color } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements AfterViewInit {
  @Input() theme?: Color;
  @ViewChild('editor',{static: false}) editorBar?: ElementRef;
  @Input() content = '';
  @Output() editorContent = new EventEmitter<string>()
  @Output() hasValue = new EventEmitter<boolean>()

  
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.editorBar?.nativeElement,'innerHTML',this.content)
  }

  setContent(e: Event) {
    this.content = (e.target as HTMLInputElement)?.innerHTML
    this.editorContent.emit(this.content);
  }

  inputContent(e: Event) {
    this.hasValue.emit((e.target as HTMLInputElement).innerText ? true : false);
  }

  executeCommand(e: string, value?: string) {
    let sel = window.getSelection();
    document.designMode = "on";
    document.execCommand(e, false, value);
    document.designMode = "off";
    sel?.removeAllRanges();
  }
}
