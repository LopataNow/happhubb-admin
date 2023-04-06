import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
