import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { CoursesListItemComponent } from './courses-list-item.component';
import { CoursesListItem } from '../../models/courses-list-item.model';
import { By } from '@angular/platform-browser';

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
        ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CoursesListItemComponent);
      component = fixture.componentInstance;
      
      const coursesListItem: CoursesListItem = { 
        id: 3,
        title: 'title',
        duration: 30,
        creationDate: '30.01.2010',
        description: 'desc'
      };
  
      component.coursesListItem = coursesListItem;
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

  describe('=> Class', () => {
    it('should emit deletedCourse event correctly', () => {
      const component = new CoursesListItemComponent();
      const coursesListItem: CoursesListItem = {
        id: 1,
        title: 'new Title',
        description: 'desc',
        duration: 30,
        creationDate: '12.01.2012'
      }

      component.deletedCourse.subscribe(deletedCourse => expect(deletedCourse).toEqual(1))
      component.onDelete(1);
    });
  });
});
