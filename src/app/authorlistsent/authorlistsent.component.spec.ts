import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorlistsentComponent } from './authorlistsent.component';

describe('AuthorlistsentComponent', () => {
  let component: AuthorlistsentComponent;
  let fixture: ComponentFixture<AuthorlistsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorlistsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorlistsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
