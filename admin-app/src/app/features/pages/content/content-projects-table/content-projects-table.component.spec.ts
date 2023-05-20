import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentProjectsTableComponent } from './content-projects-table.component';

describe('ContentProjectsTableComponent', () => {
  let component: ContentProjectsTableComponent;
  let fixture: ComponentFixture<ContentProjectsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectsTableComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentProjectsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
