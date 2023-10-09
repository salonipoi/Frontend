import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateComponent } from './update/update.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CartComponent } from './cart/cart.component';
import { ListProductsadminComponent } from './list-productsadmin/list-productsadmin.component';
import { PasswordPipe } from './pipes/password.pipe';
import { InrPipe } from './pipes/inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    CustomerDashboardComponent,
    ProfileComponent,
    ListComponent,
    ListProductsComponent,
    AdminDashboardComponent,
    UpdateComponent,
    ListCustomerComponent,
    ListCategoryComponent,
    CartComponent,
    ListProductsadminComponent,
    PasswordPipe,
    InrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
