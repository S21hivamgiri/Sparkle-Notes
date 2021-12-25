import { Component, OnInit, ViewChild } from '@angular/core';
import { Color, GroupCommandActive } from 'src/app/utilities/interfaces';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  @ViewChild('editor') editor?: EditorComponent;
  themeColor?: Color;
  content = '';
  contentValue = false;
  setActive?: GroupCommandActive[];
  constructor() { }

  ngOnInit(): void {
  }

  selectAll() {
    document.getElementById('editor')!.focus();
    let range = document.createRange();
    range.selectNode(document.getElementById('editor')!);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  }

  removeAll(){
    this.editor?.removeAll();
  }

  isContentStarted(e: boolean) {
    this.contentValue = e;
  }

  executeCommand(e: {[key:string]:string}) {
    this.editor?.executeCommand(e['cmd'], e['val']);
  }

  setContent(data: string) {
    this.content = data;
  }

  save() { }

  setTheme(data: Color) {
    this.themeColor = data;
  }
}
