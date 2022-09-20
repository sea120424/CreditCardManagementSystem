import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent,
    ListItemComponent
  ]
})
export class CreditCardModule { }
