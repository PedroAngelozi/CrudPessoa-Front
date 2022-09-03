import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimoValidatorDirective } from './directives';
import { NumericoDirective } from './directives';



@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective
  ]
})
export class SharedModule { }
