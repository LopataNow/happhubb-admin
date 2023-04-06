import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagePostEditorModule } from 'src/app/shared/components/page-post-editor/page-post-editor.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    PagePostEditorModule
  ],
})
export class DashboardModule { }
