import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboComponent } from './dashbo/dashbo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path: 'dashbo',component:DashboComponent 
  },
  {
    path: '',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'transaction',component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
