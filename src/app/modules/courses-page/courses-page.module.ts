import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { CoursesPageComponent } from './courses-page-component/courses-page.component';
import { SearchSectionComponent } from './courses-page-component/search-section/search-section.component';
import { CoursesListComponent } from './courses-page-component/courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-page-component/courses-list/courses-list-item/courses-list-item.component';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    CoursesPageComponent,
    SearchSectionComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    SortByPipe,
    FilterByPipe,
  ],
  exports: [
    CoursesPageComponent
  ],
  providers: [
  ]
})
export class CoursesPageModule { }
