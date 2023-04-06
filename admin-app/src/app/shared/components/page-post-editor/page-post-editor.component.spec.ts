import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostEditorComponent } from './page-post-editor.component';
import { tinyEdiorInitConfig } from './page-post-tiny-editor.config';

describe('PagePostEditorComponent', () => {
  let component: PagePostEditorComponent;
  let fixture: ComponentFixture<PagePostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePostEditorComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PagePostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a content property', () => {
    expect(component.initConfig).toEqual(tinyEdiorInitConfig);  
  });
  
  it('should have editor child component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('editor')).toBeTruthy();
  });
});
