import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    OverviewComponent,
    ListComponent,
    ListItemComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class TransactionModule { }
