import { FilterByPipe } from './filter-by.pipe';
import { CoursesListItem } from '../models/course-item.model';

const array: CoursesListItem[] = [{
  id: 3,
  title: 'Adventure time',
  description: 'Finn and Jake',
  creationDate: new Date(),
  duration: 24,
}, {
  id: 4,
  title: 'Shrek',
  description: 'Green Giant',
  creationDate: new Date(),
  duration: 40,
}]

describe('FilterByPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work correctly', () => {
    const pipe = new FilterByPipe();
    expect(pipe.transform(array, { field: 'title', value: 'Adventure'}).length).toEqual(1);
  });
});
