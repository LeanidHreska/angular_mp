import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CoursesListItem } from '../../models/course-item.model';
import { coursesList } from '../../mocks/coursesList';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoursesService', () => {

  const course: CoursesListItem = coursesList[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('getList should work correctly', inject([CoursesService], (service: CoursesService) => {
    service.getList('/courses').subscribe(data => {
      expect(data.length).toBeGreaterThan(10);
    });
  }));

  it('getItemById should work correctly', inject([CoursesService], (service: CoursesService) => {
    service.getItemById(1).subscribe(course => course.id === 3);
  }));

});
