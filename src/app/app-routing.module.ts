import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CartComponent } from './cart/cart.component';
import { AddComponent } from './add/add.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateComponent } from './update/update.component';
import { RegisterComponent } from './register/register.component';
import { ListProductsadminComponent } from './list-productsadmin/list-productsadmin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'customer-dashboard',component:CustomerDashboardComponent, children:[
    {path:'list',component:ListComponent},
    {path:'profile',component:ProfileComponent},
    {path:'list-products',component:ListProductsComponent},
    {path:'list-category',component:ListCategoryComponent},
    {path:'cart',component:CartComponent}
  ]},

  {path:'admin-dashboard',component:AdminDashboardComponent,children:[
    {path:'add',component:AddComponent},
    {path:'list-customer',component:ListCustomerComponent},
    {path:'list-productsadmin',component:ListProductsadminComponent},
    {path:'update',component:UpdateComponent}
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
