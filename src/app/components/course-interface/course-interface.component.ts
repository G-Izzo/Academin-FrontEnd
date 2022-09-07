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
  course_id: number;
  course!: Course | null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.course_id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.courseService
      .getCourseByCompany(1, this.course_id)
      .subscribe((c: Course | null) => {
        console.log(c);
        this.course = c;
      });
  }
}
