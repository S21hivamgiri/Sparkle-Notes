import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COLOR_DATA } from 'src/app/utilities/constants';
import { Color } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-themebar',
  templateUrl: './themebar.component.html',
  styleUrls: ['./themebar.component.scss']
})
export class ThemebarComponent implements OnInit {
  @Input() themeColor = COLOR_DATA[3];
  @Input() title = '';
  @Input() contentStarted = false;
  @Output() theme = new EventEmitter<Color>();
  @Output() save = new EventEmitter<string>();


  colors = COLOR_DATA;

  ngOnInit(): void {
    this.theme.emit(this.themeColor);
  }

  saveContent() {
    this.save.emit(this.title);
  }

  setColor(color: Color) {
    this.themeColor = color;
    this.theme.emit(color);
  }
}
