import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        SearchSectionComponent,
        CoursesListComponent,
        CoursesListItemComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterTestingModule,
        MatDialogModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
