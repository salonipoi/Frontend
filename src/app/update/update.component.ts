import { Component } from '@angular/core';
import { Product } from 'product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  p: Product = JSON.parse(localStorage.getItem("Product")!);
  constructor(private service: ProductService, private router: Router) { }
  save() {
    this.service.update(this.p);
    this.router.navigate(['/admin-dashboard/list-productsadmin']);
  }
}
