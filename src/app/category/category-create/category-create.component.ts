import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id: [''],
      name: [''],
    });
  }

  submit(){
    const product = this.categoryForm?.value;
    this.categoryService.save(product).subscribe(() => {
      this.router.navigate(['/category/list']);
      alert( 'them thanh cong');
    }, error => {
      console.log(error);
      
    }
    )
   
  }
}
