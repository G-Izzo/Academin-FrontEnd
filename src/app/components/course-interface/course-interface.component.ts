import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../../models/node.model';

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css'],
})
export class CourseInterfaceComponent implements OnInit {
  course_id!: number;
  course!: Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.course_id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(1).subscribe((c) => {
      console.log(this.course_id);
      this.course = c;
    });
  }
}
