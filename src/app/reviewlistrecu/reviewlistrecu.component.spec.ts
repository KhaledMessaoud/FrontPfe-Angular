import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewlistrecuComponent } from './reviewlistrecu.component';

describe('ReviewlistrecuComponent', () => {
  let component: ReviewlistrecuComponent;
  let fixture: ComponentFixture<ReviewlistrecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewlistrecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewlistrecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
