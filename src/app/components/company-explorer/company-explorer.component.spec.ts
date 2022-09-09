import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyExplorerComponent } from './company-explorer.component';

describe('CompanyExplorerComponent', () => {
  let component: CompanyExplorerComponent;
  let fixture: ComponentFixture<CompanyExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyExplorerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
