import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Company, Course } from '../../models/node.model';

@Component({
  selector: 'app-company-explorer',
  templateUrl: './company-explorer.component.html',
  styleUrls: ['./company-explorer.component.css'],
})
export class CompanyExplorerComponent implements OnInit {
  currentCourseID: number = 0;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // TODO: make the selected course appear 'selected' even with a page refresh
    this.currentCourseID = Number(this.route.snapshot.paramMap.get('courseID'));
    // this.courseService.changeCourse(this.currentCourseID);

    this.courseService
      .getAllCourses()
      .subscribe((nodes) => (this.sideMenu.data = nodes));
  }

  treeControl = new NestedTreeControl<Company>((node) => node.courses);

  sideMenu = new MatTreeNestedDataSource<Company>();

  isCompany = (_: number, node: Company | Course) => {
    return !!(node as Company).courses;
  };

  selectCourse = (courseID: number) => {
    console.log('selected course:', courseID);

    this.courseService.changeCourse(courseID);
  };
}
