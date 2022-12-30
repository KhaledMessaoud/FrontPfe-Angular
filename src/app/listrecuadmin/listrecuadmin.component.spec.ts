import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrecuadminComponent } from './listrecuadmin.component';

describe('ListrecuadminComponent', () => {
  let component: ListrecuadminComponent;
  let fixture: ComponentFixture<ListrecuadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrecuadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrecuadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
