import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreviewerComponent } from './listreviewer.component';

describe('ListreviewerComponent', () => {
  let component: ListreviewerComponent;
  let fixture: ComponentFixture<ListreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
