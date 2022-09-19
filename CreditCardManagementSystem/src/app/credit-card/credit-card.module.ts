import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule
  ]
})
export class CreditCardModule { }
