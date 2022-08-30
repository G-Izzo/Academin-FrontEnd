import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SideMenuNode } from './SideMenuNode.interface';
import { SideMenuService } from '../../services/side-menu.service';

interface FlatNode {
  id?: number;
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-company-explorer',
  templateUrl: './company-explorer.component.html',
  styleUrls: ['./company-explorer.component.css'],
})
export class CompanyExplorerComponent {
  constructor(private sideMenuService: SideMenuService) {
    this.sideMenu.data = sideMenuService.getSideMenu();
  }

  treeControl = new NestedTreeControl<SideMenuNode>((node) => node.children);

  sideMenu = new MatTreeNestedDataSource<SideMenuNode>();

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
