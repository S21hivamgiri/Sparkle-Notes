import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { COMMAND_DATA } from 'src/app/utilities/constants';
import { Color, CommandActive, GroupCommandActive } from 'src/app/utilities/interfaces';
const reg = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

@Component({
  selector: 'app-text-tool',
  templateUrl: './text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent implements OnInit {
  anchorLink = new FormControl('', [Validators.required, Validators.pattern(reg)])
  commands = COMMAND_DATA;
  @Input() theme?: Color;
  @Input() active?: GroupCommandActive[];
  @Output() command = new EventEmitter<{ [key: string]: string }>();
  @Output() selectAllText = new EventEmitter();
  @Output() removeAllText = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  removeAll() {
    this.removeAllText.emit();
  }

  selectAll() {
    this.selectAllText.emit();
  }

  getStyle(group: string, command: string) {
    let flag = false
    this.active?.forEach((data) => {
      if (data.group === group) {
        data.value.forEach((value) => {
          if (value.cmd === command) {
            if (value.active) {
              flag = true;
            }
          }
        });
      }
    });
    return flag;
  }

  setOutput(group: string, command: string, value?: string) {
    this.command.emit({ 'cmd': command, 'val': value || '' });
  }
}
