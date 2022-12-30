import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsentComponent } from './listsent.component';

describe('ListsentComponent', () => {
  let component: ListsentComponent;
  let fixture: ComponentFixture<ListsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
