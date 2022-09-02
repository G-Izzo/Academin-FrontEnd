import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_MENU } from '../components/company-explorer/mock_menu';
import { Company } from '../components/company-explorer/node.model';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  getSideMenu(): Observable<Company[]> {
    return of(MOCK_MENU);
  }
}
