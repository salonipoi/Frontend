import { Component } from '@angular/core';
import { Product } from 'product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-productsadmin',
  templateUrl: './list-productsadmin.component.html',
  styleUrls: ['./list-productsadmin.component.css']
})
export class ListProductsadminComponent {
  products:Product[]=[];
  constructor(private service:ProductService,private router:Router){

    service.listAll().subscribe(data=>this.products=data);

  }
  update(p:Product){
    localStorage.setItem("Product",JSON.stringify(p));
    this.router.navigate(['admin-dashboard/update']);
  }
  delete(id:number){
    if(confirm("Are you sure to delete?"))
      this.service.delete(id);
  }

}
