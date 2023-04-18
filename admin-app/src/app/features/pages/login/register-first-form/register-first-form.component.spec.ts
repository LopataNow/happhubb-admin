import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFirstFormComponent } from './register-first-form.component';

describe('RegisterFirstFormComponent', () => {
  let component: RegisterFirstFormComponent;
  let fixture: ComponentFixture<RegisterFirstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFirstFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFirstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
