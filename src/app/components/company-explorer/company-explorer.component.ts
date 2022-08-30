import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatNestedTreeNode,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { SideMenuNode } from './SideMenuNode.interface';
import { SideMenuService } from '../../services/side-menu.service';

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

  isCompany = (_: number, node: MatNestedTreeNode<SideMenuNode>) =>
    node.level == 0;
}
