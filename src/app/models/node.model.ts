import { Lesson } from './lessons.model';

export interface Company {
  id: number;
  name: string;
  courses?: Course[];
}

export class CourseContainer {
  id: number;
  name: string;
  course: Course;

  constructor(company: Company, iCourse: number) {
    this.id = company.id;
    this.name = company.name;
    this.course = company.courses?.at(iCourse) ?? {
      id: 0,
      name: 'Course name',
      starting_date: new Date(0),
      ending_date: new Date(0),
    };
  }
}

export interface Course {
  id: number;
  name: string;
  starting_date: Date;
  ending_date: Date;
  lessons?: Lesson[];
}
