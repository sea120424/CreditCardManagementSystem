import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateCustomPipe } from '../pipe/datecustompipe';
import { CurrencyCustomPipe } from '../pipe/currencypipe';


@NgModule({
  declarations: [
    OverviewComponent,
    ListComponent,
    ListItemComponent,
    AddComponent,
    DateCustomPipe
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyCustomPipe
  ],
  exports: [
    OverviewComponent
  ]
})
export class TransactionModule { }
