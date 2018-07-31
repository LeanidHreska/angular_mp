import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

import { CoursesListComponent } from './courses-list.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesListComponent,
        CoursesListItemComponent,
      ],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        SharedModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should have 2 items with .courses-list__item class', () => {
  //   const coursesList = fixture.debugElement.queryAll(By.css('.courses-list__item'));

  //   expect(coursesList.length).toEqual(2);
  // });
});
