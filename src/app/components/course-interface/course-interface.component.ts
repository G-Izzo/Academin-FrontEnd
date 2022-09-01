import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css'],
})
export class CourseInterfaceComponent implements OnInit {
  public course_id: number;

  constructor(private route: ActivatedRoute) {
    this.course_id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {}
}
