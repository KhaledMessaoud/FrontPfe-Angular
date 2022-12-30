import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenvoyeadminComponent } from './listenvoyeadmin.component';

describe('ListenvoyeadminComponent', () => {
  let component: ListenvoyeadminComponent;
  let fixture: ComponentFixture<ListenvoyeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenvoyeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenvoyeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
