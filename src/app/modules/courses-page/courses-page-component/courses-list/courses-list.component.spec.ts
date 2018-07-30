import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { CoursesListComponent } from './courses-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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
        SharedModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    component.coursesList = [{
      id: 1,
      title: 'Video course 1',
      creationDate: '01.01.2018',
      duration: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur congue ornare. Nunc efficitur congue ornare Donec hendrerit frin'
    }, {
      id: 2,
      title: 'Video course 2',
      creationDate: '01.01.2018',
      duration: 15,
      description: 'someDesc'
    }];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 2 items with .courses-list__item class', () => {
    const coursesList = fixture.debugElement.queryAll(By.css('.courses-list__item'));
  
    expect(coursesList.length).toEqual(2);
  });
});
