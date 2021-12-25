import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMAND_DATA } from 'src/app/utilities/constants';
import { Color, CommandActive, GroupCommandActive } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-text-tool',
  templateUrl: './text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent implements OnInit {
  commands = COMMAND_DATA;
  @Input() theme?: Color;
  @Input() active?: GroupCommandActive[];
  @Output() command = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  returnZero(){
    return 0;
  }

  getStyle(group: string, command: string){
    let flag=false
    this.active?.forEach((data) => {
      if(data.group===group){
      data.value.forEach((value) => {
        if (value.cmd === command) {
         if(value.active){
           flag= true;
         }
        }
      });
      }
    });
    return flag;
  }

  setOutput(group: string, command: string) {
    this.command.emit(command);
  }

}
