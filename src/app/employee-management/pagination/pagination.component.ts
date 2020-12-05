import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Output() setPage: EventEmitter<Paging> = new EventEmitter();
  @Input() paging: Paging;
  rows: number;
  pages: Array<number> = [];

  ngOnInit() {
    this.pages = [];
    this.rows = this.paging.rowPerPage;
    for (let i = 0; i <= this.paging.totalPage; i++) {
      this.pages.push(i + 1);
    }
  }

  onPageClick(page: number) {
    if (page > 0 && page !== this.paging.page) {
      this.paging.page = page;
      this.setPage.emit(this.paging);
    }
  }

  onSetRows() {
    this.paging.rowPerPage = this.rows;
    this.paging.page = 1;
    this.setPage.emit(this.paging);
  }
}

interface ApiPaging {
  page: number;
  rowPerPage: number;
  totalRow: number;
}

export interface Paging extends ApiPaging {
  totalPage: number;
}
