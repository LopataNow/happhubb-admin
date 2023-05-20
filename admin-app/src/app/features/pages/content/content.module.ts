import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentMaterialModule } from './content-material.module';
import { CommonModule } from '@angular/common';
import { ContentProjectsComponent } from './content-projects/content-projects.component';
import { ContentProjectsTableComponent } from './content-projects-table/content-projects-table.component';
import { ContentServicesComponent } from './content-services/content-services.component';
import { ContentServicesTableComponent } from './content-services-table/content-services-table.component';

const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  declarations: [
    ContentComponent,
    ContentProjectsComponent,
    ContentProjectsTableComponent,
    ContentServicesComponent,
    ContentServicesTableComponent

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ContentMaterialModule
  ]
})
export class ContentModule { }
