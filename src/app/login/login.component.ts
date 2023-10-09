import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { Customer } from 'customer.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cust : Customer = new Customer();
  custid : string = '';
  password : string = '';
  error: string = 'Welcome Back to Shopp-it!';
  msg: string = '';
  constructor(private service : CustomerService, private router : Router) { }

  authenticate() {
    if(this.custid === 'saloni' && this.password === 'mojomojo'){ 
      this.router.navigate(['/admin-dashboard']);
    }
    else if (this.custid === 'monalisa' && this.password === 'hellomona')
       this.router.navigate(['/customer-dashboard']);
    else {
      this.service.authenticate(this.custid, this.password).pipe(
        catchError(error => {
          this.error = error.error.message;
          console.log(this.error);
          return of();
        })
      ).subscribe(data => {
        localStorage.setItem("User", JSON.stringify(data));
        this.router.navigate(['/customer-dashboard']);
    });
    }
  }

}
