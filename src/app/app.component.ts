import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from './models/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() selectedCourseEvent = new EventEmitter<Course>();

  title = 'Registro-FrontEnd';
}
