import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRoutesListComponent } from './navigation-routes-list.component';

describe('NavigationRoutesListComponent', () => {
  let component: NavigationRoutesListComponent;
  let fixture: ComponentFixture<NavigationRoutesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRoutesListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavigationRoutesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
