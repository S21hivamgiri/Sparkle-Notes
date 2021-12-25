import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'src/app/utilities/interfaces';
import { EditorComponent } from 'src/app/common/editor/editor.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild('editor') editor?: EditorComponent;
  
  themeColor?: Color;
  content = ''
  contentValue = false;

  constructor() { }

  ngOnInit(): void {
  }

  isContentStarted(e: boolean) {
    this.contentValue = e;
  }

  executeCommand(e:string){
    this.editor?.executeCommand(e);
  }

  setContent(data: string) {
    this.content = data;
  }

  save() {

  }
  
  setTheme(data: Color) {
    this.themeColor = data;
  }
}
