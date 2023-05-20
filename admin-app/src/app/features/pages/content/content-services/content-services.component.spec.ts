import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  ContentServicesComponent } from './content-services.component';

describe('ContentProjectsComponent', () => {
  let component: ContentServicesComponent;
  let fixture: ComponentFixture<ContentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentServicesComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
