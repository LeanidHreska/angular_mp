import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ModalComponent } from './modal/modal.component';
import { DurationPipe } from '../../pipes/duration.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import { FullNamePipe } from '../../pipes/fullname/fullname.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoadMoreComponent,
    ModalComponent,
    DurationPipe,
    SortByPipe,
    FilterByPipe,
    FullNamePipe,
    NotFoundComponent,
    BreadcrumbsComponent,
    LoadingBlockComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadMoreComponent,
    BreadcrumbsComponent,
    DurationPipe,
    SortByPipe,
    FilterByPipe,
    LoadingBlockComponent,
  ],
  entryComponents: [ModalComponent],
})
export class SharedModule { }
