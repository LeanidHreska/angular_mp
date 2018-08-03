import { TestBed, inject } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { CoursesListItem } from '../../models/course-item.model';

describe('CoursesService', () => {

  const course: CoursesListItem = {
    id: 2,
    title: 'Rick and Morty',
    description: 'Waba-labu-dab-dab',
    creationDate: new Date(),
    duration: 42,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });
  });

  it('should be created', inject([CoursesService], (service: CoursesService) => {
    expect(service).toBeTruthy();
  }));

  it('getList should work correctly', inject([CoursesService], (service: CoursesService) => {
    expect(service.getList().length).toEqual(2);
  }));

  it('getItemById should work correctly', inject([CoursesService], (service: CoursesService) => {
    expect(service.getItemById(1).id).toEqual(1);
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

  it('getIdForNewCourse should work correctly', inject([CoursesService], (service: CoursesService) => {
    expect(service.getIdForNewCourse()).toEqual(3);
  }));
});
