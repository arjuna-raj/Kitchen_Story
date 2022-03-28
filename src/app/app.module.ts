import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { AdminMainComponent } from './components/admin/admin-main/admin-main.component';
import { AdminLoginComponent } from './components/admin/AdminLogin/admin-login.component';
import { AdminChangePasswordComponent } from './components/admin/admin-change-password/admin-change-password.component';
import { ProductComponent } from './components/shop/product/product.component';
import { CartProductComponent } from './components/shop/cart-product/cart-product.component';
import { HomeComponent } from './components/shop/home/home.component';
import { AdminMasterEditComponent } from './components/admin/admin-master-edit/admin-master-edit.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';

@NgModule({
  declarations: [AppComponent, CartComponent, ProductListComponent, AdminMainComponent, AdminLoginComponent, AdminChangePasswordComponent, ProductComponent, CartProductComponent, HomeComponent, AdminMasterEditComponent, CheckoutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
