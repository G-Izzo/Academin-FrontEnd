import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CourseService } from 'src/app/services/course.service';
import { Company, Course } from '../../models/node.model';

@Component({
  selector: 'app-company-explorer',
  templateUrl: './company-explorer.component.html',
  styleUrls: ['./company-explorer.component.css'],
})
export class CompanyExplorerComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService
      .getAllCourses()
      .subscribe((nodes) => (this.sideMenu.data = nodes));
  }

  treeControl = new NestedTreeControl<Company>((node) => node.courses);

  sideMenu = new MatTreeNestedDataSource<Company>();

  isCompany = (index: number, node: Company | Course) => {
    return !!(node as Company).courses;
  };
}
