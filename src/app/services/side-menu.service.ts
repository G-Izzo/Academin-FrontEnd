import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { SideMenuNode } from '../components/company-explorer/SideMenuNode.interface';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  getSideMenu(): Observable<SideMenuNode[]> {
    return of(MOCK_MENU);
  }
}
