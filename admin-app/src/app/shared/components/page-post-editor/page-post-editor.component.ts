import { Component, EventEmitter } from '@angular/core';
import { tinyEdiorInitConfig } from './page-post-tiny-editor.config';

@Component({
  selector: 'app-page-post-editor',
  templateUrl: './page-post-editor.component.html',
  styleUrls: ['./page-post-editor.component.scss']
})
export class PagePostEditorComponent {
  content = 'ff';
  initConfig = tinyEdiorInitConfig;

  onChange(event: EventEmitter<unknown>) {
    console.log(event);
  }
}
