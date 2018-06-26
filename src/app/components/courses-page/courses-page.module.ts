import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CoursesPageComponent } from './courses-page-component/courses-page.component';
import { SearchSectionComponent } from './courses-page-component/search-section/search-section.component';
import { CoursesListComponent } from './courses-page-component/courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-page-component/courses-list/courses-list-item/courses-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ],
  declarations: [CoursesPageComponent, SearchSectionComponent, CoursesListComponent, CoursesListItemComponent],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule { }
