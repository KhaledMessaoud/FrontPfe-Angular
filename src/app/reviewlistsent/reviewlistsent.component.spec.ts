import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewlistsentComponent } from './reviewlistsent.component';

describe('ReviewlistsentComponent', () => {
  let component: ReviewlistsentComponent;
  let fixture: ComponentFixture<ReviewlistsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewlistsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewlistsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
