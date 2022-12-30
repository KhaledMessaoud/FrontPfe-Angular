import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorlistrecuComponent } from './authorlistrecu.component';

describe('AuthorlistrecuComponent', () => {
  let component: AuthorlistrecuComponent;
  let fixture: ComponentFixture<AuthorlistrecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorlistrecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorlistrecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
