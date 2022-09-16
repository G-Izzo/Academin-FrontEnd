import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { Company, CourseContainer } from '../models/node.model';

let default_container: CourseContainer = {
  id: 0,
  name: 'Company name',
  course: {
    id: 0,
    name: 'Course name',
    starting_date: new Date(0),
    ending_date: new Date(0),
  },
};

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseSource = new BehaviorSubject<CourseContainer>(
    default_container
  );
  currentCourse = this.courseSource.asObservable();

  constructor() {}

  /* Use only to fetch an existing course */
  changeCourse(courseID: number) {
    let company, currentCourseContainer;
    try {
      company = MOCK_MENU.find(
        (company) =>
          !!company.courses &&
          company.courses.length > 0 &&
          company.courses.some((course) => course.id == courseID)
      );
      currentCourseContainer = new CourseContainer(company!, courseID);
    } catch (error) {
      currentCourseContainer = default_container;
      console.error(error);
    }

    this.courseSource.next(currentCourseContainer);
    console.log(currentCourseContainer);
  }

  getAllCourses(): Observable<Company[]> {
    return of(MOCK_MENU);
  }
}
