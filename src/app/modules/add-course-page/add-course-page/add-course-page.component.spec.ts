import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursePageComponent } from './add-course-page.component';
import { MatFormFieldModule, MatDatepickerModule, MatCardModule, MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import RouterStub from '../../../testing/router-stub';

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
        MatNativeDateModule
      ],
      providers: [
        {provide: ActivatedRoute, useClass: RouterStub},
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
      title: 'some title',
      description: 'desc',
      creationDate: new Date(),
      duration: 43,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
