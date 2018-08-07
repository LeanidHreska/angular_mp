import { FilterByPipe } from './filter-by.pipe';
import { CoursesListItem } from '../models/course-item.model';
import { coursesList } from '../mocks/coursesList';

const array: CoursesListItem[] = coursesList;

describe('FilterByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work correctly', () => {
    const pipe = new FilterByPipe();
    expect(pipe.transform(array, { field: 'name', value: 'Adventure'}).length).toEqual(1);
  });
});
