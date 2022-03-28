import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './components/admin/AdminLogin/admin-login.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { AdminChangePasswordComponent } from './components/admin/admin-change-password/admin-change-password.component';
import { AdminMasterEditComponent } from './components/admin/admin-master-edit/admin-master-edit.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { HomeComponent } from './components/shop/home/home.component';

const routes: Routes = [
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'adminMain', component: AdminMainComponent},
  { path: 'adminChangePassword', component: AdminChangePasswordComponent},
  { path: 'masterEdit', component: AdminMasterEditComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
