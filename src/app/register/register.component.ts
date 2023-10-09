import { Component } from '@angular/core';
import { Customer } from 'customer.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  c : Customer = new Customer();

  constructor(private service : CustomerService, private router : Router) { }

  save() {
    this.service.add(this.c);
    this.router.navigate(['/customer-dashboard']);
  }
}
