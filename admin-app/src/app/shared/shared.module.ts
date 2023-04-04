import { NgModule } from '@angular/core';
import { SharedMateralModule } from './shared-materal.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedMateralModule
  ],
  exports: [
    SharedMateralModule,
  ]
})
export class SharedModule { }
