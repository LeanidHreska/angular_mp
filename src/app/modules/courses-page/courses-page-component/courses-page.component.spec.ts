import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoadMoreComponent } from '../../shared/load-more/load-more.component';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        LoadMoreComponent,
      ], 
      imports: [
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        BrowserAnimationsModule
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
