import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMAND_DATA } from 'src/app/utilities/constants';
import { Color } from 'src/app/utilities/interfaces';

@Component({
  selector: 'app-text-tool',
  templateUrl: './text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent implements OnInit {
  commands = COMMAND_DATA;
  @Input() theme?: Color;
  @Output() command = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  setOutput(group: string, command: string) {
    this.command.emit(command);
  }

}
