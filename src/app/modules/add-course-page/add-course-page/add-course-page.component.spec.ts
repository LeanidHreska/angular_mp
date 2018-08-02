import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';
import { MatFormFieldModule, MatDatepickerModule, MatCardModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddCoursePageComponent,
      ],
      imports: [
        MatFormFieldModule,
        FormsModule,
        MatDatepickerModule,
        MatCardModule,
        SharedModule,
        RouterTestingModule,
        MatNativeDateModule,
        HttpClientModule
      ],
      providers: [
        HttpClient,
        {provide: ActivatedRoute, useClass: RouterTestingModule},
        {provide: Router, useClass: RouterTestingModule}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    component.courseItem = {
      id: 1,
      name: 'some title',
      description: 'desc',
      date: new Date(),
      length: 43,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
