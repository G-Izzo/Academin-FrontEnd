import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegistryComponent } from './course-registry.component';

describe('CourseRegistryComponent', () => {
  let component: CourseRegistryComponent;
  let fixture: ComponentFixture<CourseRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRegistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
