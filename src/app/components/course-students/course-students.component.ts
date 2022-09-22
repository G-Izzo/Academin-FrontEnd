import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { MOCK_STUDENTS } from '../../mock data/mock_students';

@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.css'],
})
export class CourseStudentsComponent implements OnInit {
  student_list: Student[] = MOCK_STUDENTS;

  constructor() {}

  ngOnInit(): void {}
}
