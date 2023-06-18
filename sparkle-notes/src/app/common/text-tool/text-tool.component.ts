import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { COMMAND_DATA } from 'src/app/utilities/constants';
import { Color, GroupCommandActive } from 'src/app/utilities/interfaces';

import { MatMenuTrigger } from '@angular/material/menu';
const reg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

@Component({
  selector: 'app-text-tool',
  templateUrl: './text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent {
  @ViewChild('anchorMenuTrigger') anchorMenuTrigger?: MatMenuTrigger;
  @Input() theme?: Color;
  @Input() active?: GroupCommandActive[];
  @Output() command = new EventEmitter<{ [key: string]: string }>();
  @Output() selectAllText = new EventEmitter();
  @Output() removeAllText = new EventEmitter();

  anchorLink = new UntypedFormControl('', [Validators.required, Validators.pattern(reg)])
  commands = COMMAND_DATA;

  removeAll() {
    this.removeAllText.emit();
  }

  selectAll() {
    this.selectAllText.emit();
  }

  getStyle(group: string, command: string, getValue:boolean=false) {
    let flag = false;
    let cmdValue:string='';
    this.active?.forEach((data) => {
      if (data.group === group) {
        data.value.forEach((value) => {
          if (value.cmd === command) {
            if (value.active) {
              flag = true;
            }
            cmdValue = value.value || 'rgba(0,0,0,0)';
          }
        });
      }
    });
    return getValue?cmdValue:flag;
  }

  setAnchorLink(event:Event) {
    if (this.getStyle('miscellneous', 'link')) {
      this.setOutput('miscellneous', 'unlink');
      this.anchorMenuTrigger?.closeMenu();
      event.stopPropagation();
    }
    else {
      this.anchorMenuTrigger?.openMenu();
    }
  }

  setOutput(group: string, command: string, value?: string) {
    this.active?.forEach((data) => {
      if (data.group === group) {
        data.value.forEach((value) => {
          if (value.cmd === command) {
            if (value.active) {
              value.active=false;
            }
          }
        });
      }
    });
    this.command.emit({ 'cmd': command, 'val': value || '' });
  }
}
