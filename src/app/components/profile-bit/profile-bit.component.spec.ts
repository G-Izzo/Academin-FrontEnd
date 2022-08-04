import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBitComponent } from './profile-bit.component';

describe('ProfileBitComponent', () => {
  let component: ProfileBitComponent;
  let fixture: ComponentFixture<ProfileBitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
