import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'cart.model';
import { CartTemplate } from 'carttemplate.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  listByCustid(custid: String) {
    return this.http.get<CartTemplate[]>("http://localhost:9003/cart/list/" + custid);
  }

  add(cart:Cart){
    this.http.post("http://localhost:9003/cart/add",cart).subscribe(data=>data=cart);
  }

  delete(cid:number){
    return this.http.delete("http://localhost:9003/cart/"+cid);
  }
 
}
