import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CourseContainer } from '../../models/node.model';

export enum CoursePage {
  STUDENTS = 1,
  REGISTRY = 2,
}

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css'],
})
export class CourseInterfaceComponent implements OnInit {
  courseContainer!: CourseContainer;
  open_page: CoursePage = CoursePage.STUDENTS;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.displayedCourse().subscribe((course) => {
      this.courseContainer = course;
    });
  }

  ngOnChanges(): void {
    this.courseService.displayedCourse().subscribe((course) => {
      this.courseContainer = course;
    });
  }

  openCoursePage(page: CoursePage): void {
    this.open_page = page;
  }
}
