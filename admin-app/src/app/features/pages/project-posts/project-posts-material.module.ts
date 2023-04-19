import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports:[
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProjectPostsMaterialModule { }
