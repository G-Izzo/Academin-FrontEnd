import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';

// TODO: Make this a real service
let course: Course[] = [
  {
    id: 1,
    name: 'IBS Academy',
  },
  {
    id: 2,
    name: 'Minecraft Building Course',
  },
  {
    id: 3,
    name: 'HellHeaven',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourse(id: number): Observable<Course> {
    return of(course[id]);
  }
}
