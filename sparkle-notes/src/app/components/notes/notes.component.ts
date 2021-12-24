import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  themeColor?: Color;
  constructor() { }

  ngOnInit(): void {
  }

  setTheme(data: Color) {
    this.themeColor = data
  }
}
