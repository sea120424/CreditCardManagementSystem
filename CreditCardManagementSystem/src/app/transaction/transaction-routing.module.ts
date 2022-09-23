import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [{
  path: '',
  component: OverviewComponent
},{
  path: 'overview',
  component: OverviewComponent
},{
  path: 'add',
  component: AddComponent
},{
  path: 'list',
  component: ListComponent
}, {
  path: 'list/:uid',
  component: ListItemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
