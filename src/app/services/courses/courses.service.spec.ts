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

  it('createCourse should work correctly', inject([CoursesService], (service: CoursesService) => {
    service.createCourse(course);
    expect(service.getList().length).toEqual(3);
  }));

  it('updateCourse should work correctly', inject([CoursesService], (service: CoursesService) => {
    service.updateItem(course);
    expect(service.getItemById(2).title).toEqual('Rick and Morty');
  }));

  it('removeItem should work correctly', inject([CoursesService], (service: CoursesService) => {
    service.removeItem(2);
    expect(service.getList().length).toBe(1);
  }));
});
