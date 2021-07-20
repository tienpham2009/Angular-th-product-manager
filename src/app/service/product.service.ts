import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New',
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new',
    },
    {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%',
    },
    {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%',
    },
    {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new',
    },
  ];

  constructor(private router: Router) {}

  getAll() {
    return this.products;
  }

  saveProduct(product: any) {
    this.products.push(product);
  }

  findById(id: any) {
    return this.products.find((item) => item.id == id);
  }

  update(data: any, id: any) {
    this.products.forEach((product) => {{
      if (product.id == data.id) {
        product = data;
      }
    }});
  }

  delete(id: any) {
    this.products.forEach((product , index) => {{
      if (product.id == id) {
        this.products.splice(index, 1);
      }
    }});

    this.router.navigate(['/product/list']);
  }
}
