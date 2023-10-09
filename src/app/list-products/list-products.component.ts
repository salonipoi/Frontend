import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from 'product.model';
import { Customer } from 'customer.model';
import { Cart } from 'cart.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products:Product[]=[];
  c:Customer=JSON.parse(localStorage.getItem("User")!);
  c1:Cart=new Cart();
  
  constructor(private service :ProductService,private router:Router,private cservice:CartService){
    
    this.service.listAll().subscribe(data=>this.products=data);
    this.c1.custid=this.c.custid;
  }

  add(id:number){
    this.c1.id=id;
    this.cservice.add(this.c1);
  }
}
