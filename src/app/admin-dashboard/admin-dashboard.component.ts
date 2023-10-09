import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'product.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  p:Product=new Product();

  constructor(private router : Router) { }
  logout() {
    this.router.navigate(['/login']);
  }
}
