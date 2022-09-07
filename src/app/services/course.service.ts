import { Injectable } from '@angular/core';
import { Observable, of, toArray } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { Company, Course } from '../models/node.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  default_course: Course = {
    id: 0,
    name: 'Course name',
    starting_date: new Date(0),
    ending_date: new Date(0),
  };

  getAllCourses(): Observable<Company[]> {
    return of(MOCK_MENU);
  }

  getCourseByCompany(
    company_id: number,
    course_id: number
  ): Observable<Course> {
    return of(
      MOCK_MENU[company_id].courses?.filter((c) => c.id === course_id)[0] ??
        this.default_course
    );
  }

  getCourseById(course_id: number): Observable<Course> {
    return of(
      MOCK_MENU.map((com) => com.courses ?? [this.default_course])
        .flat()
        .filter((c) => c.id === course_id)[0]
    );
  }
}
