import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SideMenuNode } from './SideMenuNode.interface';
import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-company-explorer',
  templateUrl: './company-explorer.component.html',
  styleUrls: ['./company-explorer.component.css'],
})
export class CompanyExplorerComponent {
  constructor(private sideMenuService: SideMenuService) {
    sideMenuService
      .getSideMenu()
      .subscribe((nodes) => (this.sideMenu.data = nodes));
  }

  treeControl = new NestedTreeControl<SideMenuNode>((node) => node.children);

  sideMenu = new MatTreeNestedDataSource<SideMenuNode>();

  isCompany = (index: number, node: SideMenuNode) => {
    return !!node.children && node.children.length > 0;
  };
}
