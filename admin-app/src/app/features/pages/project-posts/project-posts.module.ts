import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPostsComponent } from './project-posts/project-posts.component';
import { ProjectPostsMaterialModule } from './project-posts-material.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProjectPostsComponent }
];

@NgModule({
  declarations: [
    ProjectPostsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProjectPostsMaterialModule
  ]
})
export class ProjectsModule { }
