import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion'; 

@NgModule({
  exports:[
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class ContentMaterialModule { }
