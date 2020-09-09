import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    PagingHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }
