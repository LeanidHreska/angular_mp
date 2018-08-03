import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';
import { MatFormFieldModule, MatDatepickerModule, MatCardModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        MatNativeDateModule,
        MatInputModule,
        RouterTestingModule,
        MatNativeDateModule,
        HttpClientModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useClass: RouterTestingModule}
      ],
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

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
