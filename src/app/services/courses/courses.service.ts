import { Injectable } from '@angular/core';
import { head, concat } from 'lodash';
import { CoursesListItem } from '../../models/course-item.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesList: CoursesListItem[] = [];

  constructor(private http: HttpClient) { }

  getList(query: string) {
    return this.http.get<CoursesListItem[]>(`${serverUrl}/courses?${query}`);
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
        : course;
    });
  }

  removeItem(id: number) {
    this.coursesList = this.coursesList.filter(course => course.id !== id);
  }

  getIdForNewCourse(): number {
    return this.coursesList.reduce((maxId, course) => (maxId < course.id ? course.id : maxId) , 1) + 1;
  }
}
