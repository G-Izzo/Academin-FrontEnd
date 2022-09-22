import { Component } from '@angular/core';
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

  constructor(private xlsx: XlsxService, private courseHttp: CourseService) {}

  //downloadExcel(id:number){
  downloadExcel() {
    let course: Course = {
      id: 1,
      name: 'Corso 1',
      starting_date: new Date('2022-08-03'),
      ending_date: new Date('2023-06-21'),
      lessons: [
        {
          id: 1,
          date: new Date('2022-08-04'),
          students: [
            {
              student: { id: 1, name: 'Nome 1', surname: 'Cognome 1' },
              daily_grade: 5,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 2, name: 'Nome 2', surname: 'Cognome 2' },
              daily_grade: 2,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 3, name: 'Nome 3', surname: 'Cognome 3' },
              daily_grade: 4,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 4, name: 'Nome 4', surname: 'Cognome 4' },
              daily_grade: 4,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
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
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 4, name: 'Nome 4', surname: 'Cognome 4' },
              daily_grade: 5,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 5, name: 'Nome 5', surname: 'Cognome 5' },
              daily_grade: 3,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 7, name: 'Nome 7', surname: 'Cognome 7' },
              daily_grade: 4,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
          ],
        },
        {
          id: 2,
          date: new Date('2022-09-20'),
          students: [
            {
              student: { id: 1, name: 'Nome 1', surname: 'Cognome 1' },
              daily_grade: 3,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 2, name: 'Nome 2', surname: 'Cognome 2' },
              daily_grade: 1,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 3, name: 'Nome 3', surname: 'Cognome 3' },
              daily_grade: 5,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
            {
              student: { id: 7, name: 'Nome 7', surname: 'Cognome 7' },
              daily_grade: 4,
              join_time: new Date('2022-08-04 16:00:00'),
              exit_time: new Date('2022-08-04 18:00:00')
            },
          ],
        },
      ],
    };
    //let course:Course=this.courseHttp.getCourse(id);
    this.xlsx.downloadExcel(course);
  }
}
