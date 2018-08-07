import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

import { SearchSectionComponent } from './search-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('SearchSectionComponent', () => {
  let component: SearchSectionComponent;
  let fixture: ComponentFixture<SearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSectionComponent ],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    component.value = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
