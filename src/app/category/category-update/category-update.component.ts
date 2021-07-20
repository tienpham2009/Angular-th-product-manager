import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent implements OnInit {
  categoryUpdateForm: FormGroup | undefined;
  category: any;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.category = this.categoryService.findById(id);

    this.categoryUpdateForm = this.fb.group({
      id: [this.category?.id],
      name: [this.category?.name],
    });
  }

  submit() {
    this.category = this.categoryUpdateForm?.value;
    const id = this.category.id;
    this.categoryService.update(this.category, id);
    this.router.navigate(['/category/list']);
  }

  
}
