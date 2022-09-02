import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from './components/company-explorer/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() selectedCourseEvent = new EventEmitter<Course>();

  title = 'Registro-FrontEnd';
}
