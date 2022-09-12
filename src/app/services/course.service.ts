import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { CourseContainer, Company } from '../models/node.model';

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
  @Output() currentCourse = new EventEmitter<CourseContainer>();

  constructor() {}

  /* Use only to fetch an existing course */
  changeCourse(courseID: number) {
    console.log(default_container);

    this.currentCourse.emit(default_container);

    /* let company = MOCK_MENU[0];
    console.log('mock_menu: ', company);

    let index = company.courses!.findIndex((course) => {
      console.log('index: ', courseID, course);

      return course.id === courseID;
    });
    console.log(index);

    if (index === -1) this.currentCourse.emit(default_container);

    console.log(new CourseContainer(company, index));
    this.currentCourse.emit(new CourseContainer(company, index)); */
  }

  getAllCourses(): Observable<Company[]> {
    return of(MOCK_MENU);
  }

  /* getCourseByCompany(
    companyID: number,
    courseID: number
  ): Observable<CourseContainer> {
    let company = MOCK_MENU.find((company) => company.id === companyID);
    if (company == null || company.courses == null)
      return of(default_container);

    let index = company.courses.findIndex((course) => course.id === courseID);
    if (index === -1) return of(default_container);

    return of(new CourseContainer(company, index));
  }

  getCourseById(courseID: number): Observable<CourseContainer> {
    // TODO
    return of(default_container);
  } */
}
