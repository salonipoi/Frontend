import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  add(customer: Customer) {
    this.http.post("http://localhost:9002/customer/add", customer).subscribe(data => data = customer);
  }
  find(custid: string) {

    return this.http.get<Customer[]>("http://localhost:9002/customer/" + custid);

  }
  async list() {
    return await this.http.get<Customer[]>("http://localhost:9002/customer/list");

  }
  authenticate(custid: string, password: string) {

    return this.http.get<Customer>("http://localhost:9002/customer/login?custid=" + custid + "&password=" + password);

  }
}
