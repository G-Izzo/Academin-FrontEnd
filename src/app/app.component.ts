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
      name: 'Azienda 1',
      starting_date: new Date('2022-08-03'),
      ending_date: new Date('2023-06-30'),
    };
    //let course:Course=this.courseHttp.getCourse(id);
    this.xlxs.downloadExcel(course);
  }
}
