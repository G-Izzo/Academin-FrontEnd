import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/node.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourse(id: number): Observable<Course> {
    // TODO: broken method
    return of();
  }
}
