import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{
  path: '',
  // component: HomeComponent
  component: HomeComponent
},{
  path: 'card',
  loadChildren: () => import('./credit-card/credit-card.module').then((m) => m.CreditCardModule)
},{
  path: 'transactions',
  loadChildren: () => import('./transaction/transaction.module').then((m) => m.TransactionModule)
},{
  path: '**',
  component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
