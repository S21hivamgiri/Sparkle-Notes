import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { COLOR_DATA, DEFAULT_VALUE, FILTER_DATA, SORT_DATA, TYPE_DATA } from 'src/app/utilities/constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() themeColor = DEFAULT_VALUE;

  colors = COLOR_DATA;
  filters = FILTER_DATA;
  sorts = SORT_DATA;
  types = TYPE_DATA;
  filter = new FormControl();
  sort = new FormControl(this.sorts[0].value);
  sortDsc=false;
  ngOnInit(): void {
  }

  constructor() { }

  getFilterName(data: string) {
    if (data)
      return this.filters.filter(a => a.value === data)[0].title;
    else return '';
  }

  getSortName(data: string) {
    if (data)
      return this.sorts.filter(a => a.value === data)[0].title;
    else return '';
  }
}
