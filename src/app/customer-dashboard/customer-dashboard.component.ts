import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'customer.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  c : Customer = new Customer();

  constructor(private router : Router) { 
    this.c = JSON.parse(localStorage.getItem("User")!);
  }

  logout() {
    localStorage.setItem("User", "");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
