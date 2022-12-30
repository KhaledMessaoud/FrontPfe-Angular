import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsubComponent } from './startsub.component';

describe('StartsubComponent', () => {
  let component: StartsubComponent;
  let fixture: ComponentFixture<StartsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
