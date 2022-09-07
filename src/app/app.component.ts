import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from './models/node.model';
import { CourseService } from './services/course.service';
import { XlsxService } from './services/xlsx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Registro-FrontEnd';

  constructor(private xlxs: XlsxService, private courseHttp: CourseService) {}

  //downloadExcel(id:number){
  downloadExcel() {
    let course: Course = {
      id: 1,
      name: 'Corso 1',
      starting_date: new Date('2022-08-03'),
      ending_date: new Date('2023-06-30'),
      lessons: [
        {
          id: 1,
          date: new Date('2022-08-03'),
          students: [
            {
              student: { id: 1, name: 'Nome 1', surname: 'Cognome 1' },
              daily_grade: 5,
            },
            {
              student: { id: 2, name: 'Nome 2', surname: 'Cognome 2' },
              daily_grade: 2,
            },
            {
              student: { id: 3, name: 'Nome 3', surname: 'Cognome 3' },
              daily_grade: 4,
            },
            {
              student: { id: 4, name: 'Nome 4', surname: 'Cognome 4' },
              daily_grade: 4,
            },
          ],
        },
        {
          id: 2,
          date: new Date('2022-08-08'),
          students: [
            {
              student: { id: 2, name: 'Nome 2', surname: 'Cognome 2' },
              daily_grade: 1,
            },
            {
              student: { id: 4, name: 'Nome 4', surname: 'Cognome 4' },
              daily_grade: 5,
            },
            {
              student: { id: 5, name: 'Nome 5', surname: 'Cognome 5' },
              daily_grade: 3,
            },
            {
              student: { id: 7, name: 'Nome 7', surname: 'Cognome 7' },
              daily_grade: 4,
            },
          ],
        },
        {
          id: 2,
          date: new Date('2022-08-20'),
          students: [
            {
              student: { id: 1, name: 'Nome 1', surname: 'Cognome 1' },
              daily_grade: 3,
            },
            {
              student: { id: 2, name: 'Nome 2', surname: 'Cognome 2' },
              daily_grade: 1,
            },
            {
              student: { id: 3, name: 'Nome 3', surname: 'Cognome 3' },
              daily_grade: 5,
            },
            {
              student: { id: 7, name: 'Nome 7', surname: 'Cognome 7' },
              daily_grade: 4,
            },
          ],
        },
      ],
    };
    //let course:Course=this.courseHttp.getCourse(id);
    this.xlxs.downloadExcel(course);
  }
}
