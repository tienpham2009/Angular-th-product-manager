import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  productUpdateForm: FormGroup | undefined;

  product: any;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productUpdateForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      description: [''],
    });

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.product = this.productService.findById(id);
    console.log(this.product);
  }

  submit() {
    this.productService.update(this.product , this.product.id);
    this.router.navigate(['product/list']);
  }
}
