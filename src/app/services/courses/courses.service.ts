import { Injectable } from '@angular/core';
import { noop } from 'lodash';
import { CoursesListItem } from '../../models/course-item.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../../config/config';
import { Observable } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { LoaderService } from '../loader/loader.service';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public coursesList: CoursesListItem[] = [];

  constructor(private http: HttpService) { }

  createCourse(course: CoursesListItem) {
    return this.http.post(`${serverUrl}/courses`, course)
      .subscribe(noop, error => console.log(error));
  }

  updateItem(updatedCourse: CoursesListItem) {
    this.coursesList = this.coursesList.map(course => {
      return course.id === updatedCourse.id
        ? updatedCourse
        : course;
    });
  }

  removeItem(id: number): Observable<HttpResponse> {
    return this.http.delete(`${serverUrl}/courses/${id}`);
  }
}
