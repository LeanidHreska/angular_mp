import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule, MatDialog, MatDialogModule } from '@angular/material';
import { CoursesListItemComponent } from './courses-list-item.component';
import { By } from '@angular/platform-browser';
import { CoursesListItem } from '../../../../../models/course-item.model';
import { SharedModule } from '../../../../shared/shared.module';

describe('CoursesListItemComponent', () => {
  describe('=> Stand alone', () => {
    let component: CoursesListItemComponent;
    let fixture: ComponentFixture<CoursesListItemComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CoursesListItemComponent
        ],
        imports: [
          MatCardModule,
          SharedModule,
          MatDialogModule,
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CoursesListItemComponent);
      component = fixture.componentInstance;

      const coursesListItem: CoursesListItem = {
        id: 3,
        name: 'title',
        length: 30,
        date: new Date(),
        description: 'desc'
      };

      component.item = coursesListItem;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have 2 button', () => {
      const buttons = fixture.debugElement.queryAll(By.css('button'));

      expect(buttons.length).toEqual(2);
    });
  });
});
