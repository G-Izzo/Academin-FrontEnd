import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { CourseContainer, Company } from '../models/node.model';
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

  constructor(private route: ActivatedRoute) {}

  displayedCourse(): Observable<CourseContainer> {
    console.log(this.route.snapshot.paramMap.getAll('ID'));

    let courseID = Number(this.route.snapshot.paramMap);

    /* let company = MOCK_MENU[0];
    console.log(company);

    let index = company.courses!.findIndex((course) => {
      console.log(courseID, course);

      return course.id === courseID;
    });
    console.log(index);

    if (index === -1) return of(this.default_container);

    console.log(new CourseContainer(company, index));
    return of(new CourseContainer(company, index)); */
    return of(this.default_container);
  }

  getAllCourses(): Observable<Company[]> {
    return of(MOCK_MENU);
  }

  getCourseByCompany(
    companyID: number,
    courseID: number
  ): Observable<CourseContainer> {
    let company = MOCK_MENU.find((company) => company.id === companyID);
    if (company == null || company.courses == null)
      return of(this.default_container);

    let index = company.courses.findIndex((course) => course.id === courseID);
    if (index === -1) return of(this.default_container);

    return of(new CourseContainer(company, index));
  }

  getCourseById(courseID: number): Observable<CourseContainer> {
    // TODO
    return of(this.default_container);
  }
}
