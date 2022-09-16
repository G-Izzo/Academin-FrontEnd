import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  courseSubscription!: Subscription;
  courseContainer!: CourseContainer;
  open_page: CoursePage = CoursePage.STUDENTS;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courseService.changeCourse(this.route.snapshot.params['courseID']);
    this.courseSubscription = this.courseService.currentCourse.subscribe(
      (course) => (this.courseContainer = course)
    );
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe();
  }

  switchInterface(page: CoursePage): void {
    this.open_page = page;
  }
}
