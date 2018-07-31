import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    AddCoursePageComponent,
  ],
  declarations: [
    AddCoursePageComponent,
  ]
})
export class AddCoursePageModule { }
