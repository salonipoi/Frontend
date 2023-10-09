import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  remove(id: string) {
    throw new Error('Method not implemented.');
  }
  list() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  add(product: Product) {
    this.http.post("http://localhost:9001/product/add/", product).subscribe(data => data = product);
  }
  find(id: number) {
    return this.http.post("http://localhost:9001/product/", id);
  }
  listAll() {
    return this.http.get<Product[]>("http://localhost:9001/product/list");
  }
  listByCategory(category: string) {
    return this.http.get<Product[]>("http://localhost:9001/product/category/" + category);
  }
  delete(id: number) {
    return this.http.delete("http://localhost:9001/product/" + id).subscribe();
  }
  update(product: Product) {
    this.http.put("http://localhost:9001/product/update", product).subscribe(data => data = product);
  }

}
