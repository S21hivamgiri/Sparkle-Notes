import { Component, OnInit } from '@angular/core';
import { COMMAND_DATA } from 'src/app/utilities/constants';

@Component({
  selector: 'app-text-tool',
  templateUrl: './text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent implements OnInit {
  commands = COMMAND_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  setOutput(key: string, value: string) {

  }

}
