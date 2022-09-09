import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { CourseContainer } from '../../models/node.model';

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css'],
})
export class CourseInterfaceComponent implements OnInit {
  course_id!: number;
  courseContainer!: CourseContainer;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    /* Empty */
  }

  ngDoCheck(): void {
    this.course_id = Number(this.route.snapshot.paramMap.get('course_id'));

    this.courseService.getCourseById(this.course_id).subscribe((course) => {
      this.courseContainer = course;
    });
  }
}
