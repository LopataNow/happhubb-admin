import { NgModule } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PagePostEditorComponent } from './page-post-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagePostEditorComponent
  ],
  imports: [
    FormsModule,
    EditorModule
  ],
  exports:[PagePostEditorComponent]
})
export class PagePostEditorModule { }
