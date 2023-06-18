import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { COLOR_DATA, DEFAULT_COLOR_VALUE, FILTER_DATA, SORT_DATA, TYPE_DATA } from 'src/app/utilities/constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() themeColor = DEFAULT_COLOR_VALUE;

  colors = COLOR_DATA;
  filters = FILTER_DATA;
  sorts = SORT_DATA;
  types = TYPE_DATA;
  filter = new UntypedFormControl();
  sort = new UntypedFormControl(this.sorts[0].value);
  sortDsc=false;
  defaultTheme = DEFAULT_COLOR_VALUE

  ngOnInit(): void {}

  constructor(private router: Router) { }

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

  routeTo(data:string){
    this.router.navigate(['/'+data]);
  }
}
