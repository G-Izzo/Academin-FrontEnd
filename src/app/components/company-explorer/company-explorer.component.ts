import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Company, Course } from '../../models/node.model';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-company-explorer',
  templateUrl: './company-explorer.component.html',
  styleUrls: ['./company-explorer.component.css'],
})
export class CompanyExplorerComponent implements OnInit {
  @Input() course!: Course;

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit() {
    this.sideMenuService
      .getSideMenu()
      .subscribe((nodes) => (this.sideMenu.data = nodes));
  }

  treeControl = new NestedTreeControl<Company>((node) => node.courses);

  sideMenu = new MatTreeNestedDataSource<Company>();

  isCompany = (index: number, node: Company | Course) => {
    return !!(node as Company).courses;
  };
}
