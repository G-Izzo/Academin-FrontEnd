import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

let default_student = {
  id: 0,
  name: 'Mario',
  surname: 'Rossi',
};

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css'],
})
export class StudentCardComponent implements OnInit {
  @Input() student: Student = default_student;

  constructor() {}

  ngOnInit(): void {
    console.log(this.student);
  }
}
