import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>();
  p = 1;


  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event: any): void {
    console.log('page changed event' + event);
    this.pageChanged.emit(event);
  }

}
