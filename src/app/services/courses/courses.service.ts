import { Injectable } from '@angular/core';
import { head, concat } from 'lodash';
import { CoursesListItem } from '../../components/courses-page/courses-page-component/models/courses-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesList: CoursesListItem[] = [{
    id: 2,
    title: 'Video course 2',
    creationDate: 1535058512080,
    duration: 65,
    description: 'someDesc',
    topRated: false,
  }, {
    id: 1,
    title: 'Video course 1',
    creationDate: 1530958348080,
    duration: 12,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur congue ornare. Nunc efficitur congue ornare Donec hendrerit frin',
    topRated: true,
  }];

  constructor() { }

  getList() {
    return this.coursesList;
  }

  getItemById(id: number) {
    return head(this.coursesList.filter(course => course.id === id));
  }

  createCourse(course: CoursesListItem) {
    this.coursesList = concat(this.coursesList, course);
  }

  updateItem(updatedCourse: CoursesListItem) {
    this.coursesList = this.coursesList.map(course => {
      return course.id === updatedCourse.id
        ? updatedCourse
        : course
    })
  }

  removeItem(id: number) {
    this.coursesList = this.coursesList.filter(course => course.id !== id);
  }
}