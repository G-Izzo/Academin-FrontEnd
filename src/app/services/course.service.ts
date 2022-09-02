import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../components/company-explorer/node.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourse(id: number): Observable<Course> {
    return of('Sesso pazzo');
  }
}
