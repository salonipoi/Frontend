import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Customer } from 'customer.model';
import { CartTemplate } from 'carttemplate.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:CartTemplate[]=[];
  c:Customer=JSON.parse(localStorage.getItem("User")!);

  constructor(private service:CartService){
    this.service.listByCustid(this.c.custid).subscribe(data=>this.cart=data);
  }
  
  async delete(cid:number){
    if(await confirm("Are you sure you want to remove this item from your cart")){
      await this.service.delete(cid).subscribe();
    }
    window.location.reload();
  }
}
