import { Component } from '@angular/core';
import { Customer } from 'customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  customers : Customer[] = [];

  constructor(private service : CustomerService) {
    this.service.list().then(obs => obs.subscribe(data => this.customers = data));
  }
}
