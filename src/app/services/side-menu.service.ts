import { Injectable } from '@angular/core';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { SideMenuNode } from '../components/company-explorer/SideMenuNode.interface';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor() {}

  getSideMenu(): SideMenuNode[] {
    return MOCK_MENU;
  }
}
