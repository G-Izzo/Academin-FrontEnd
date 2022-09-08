import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { CourseContainer, Course, Company } from '../models/node.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  default_container: CourseContainer = {
    id: 0,
    name: 'Company name',
    course: {
      id: 0,
      name: 'Course name',
      starting_date: new Date(0),
      ending_date: new Date(0),
    },
  };

  getAllCourses(): Observable<Company[]> {
    return of(MOCK_MENU);
  }

  getCourseByCompany(
    company_id: number,
    course_id: number
  ): Observable<CourseContainer> {
    // TODO
    return of(this.default_container);
  }

  getCourseById(course_id: number): Observable<CourseContainer> {
    // TODO
    return of(this.default_container);
  }
}
