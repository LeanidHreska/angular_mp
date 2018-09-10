import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
  ],
  exports: [
    AddCoursePageComponent,
  ],
  declarations: [
    AddCoursePageComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class AddCoursePageModule { }
