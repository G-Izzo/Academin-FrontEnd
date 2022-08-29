import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
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

  private _transformer = (node: SideMenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  menuControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  menuFlatter = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  sideMenu = new MatTreeFlatDataSource(this.menuControl, this.menuFlatter);

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
