import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COLOR_DATA } from 'src/app/utilities/constants';
import { Color, ThemeBar } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-themebar',
  templateUrl: './themebar.component.html',
  styleUrls: ['./themebar.component.scss']
})
export class ThemebarComponent implements OnInit {
  @Input() themeColor = COLOR_DATA[4];
  @Input() title = '';
  @Input() contentStarted = false;
  @Output() theme = new EventEmitter<Color>();
  @Output() save = new EventEmitter<ThemeBar>();

  marked = false;
  autoLink = true
  colors = COLOR_DATA;

  ngOnInit(): void {
    this.theme.emit(this.themeColor);
  }

  saveContent() {
    this.save.emit({
      title: this.title,
      bookmarked: this.marked,
      linked: this.autoLink
    });
  }

  setColor(color: Color) {
    this.themeColor = color;
    this.theme.emit(color);
  }
}
