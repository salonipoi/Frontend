import { Component } from '@angular/core';
import { Customer } from 'customer.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Cart } from 'cart.model';
import { Product } from 'product.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  // product: Product[] = [];
  // c: Customer = new Customer();
  // cart: Cart = new Cart();
  // cat: string = '';
  // customer: Customer[] = [];
  // constructor(private service: ProductService, private router: Router, private cservice: CartService) {
  //   this.service.listAll().subscribe(data => this.product = data);
  // }

  // search() {
  //   this.service.listByCategory(this.cat).subscribe((data) => this.product = data);
  // }

  // add(id: number) {
  //   sessionStorage.setItem("id", id + "");
  //   this.cart.custid = sessionStorage.getItem("username") as string;
  //   this.cart.id = parseInt(sessionStorage.getItem("id") as string);
  //   this.cservice.add(this.cart);
  //   //this.router.navigate(['/cart']);
  // }
  products:Product[]=[];
  cat : string[] = ["Fiction","Spiritual","Self-Help","Fantasy","Auto-Biography","Mythology","Sci-fi","Finance"];
  category:string='';
  c:Customer=JSON.parse(localStorage.getItem("User")!);
   c1:Cart=new Cart();
   constructor(private service:ProductService,private cservice:CartService){
    this.service.listAll().subscribe(data=>this.products=data);
    this.c1.custid=this.c.custid;
   }
   search(){
     this.service.listByCategory(this.category).subscribe((data: Product[]) => {this.products = data;})
   }
   add(id:number){
    this.c1.id=id;
    this.cservice.add(this.c1);
  }
}