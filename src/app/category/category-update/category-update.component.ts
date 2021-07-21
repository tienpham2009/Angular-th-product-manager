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
    this.categoryUpdateForm = this.fb.group({
      id: [''],
      name: [''],
    });
    this.getCategory(id);
  }

  getCategory(id: any) {
    this.categoryService.findById(id).subscribe((res: any) => {
      if (res.status == 'success') {
        let data = res.data;
        this.categoryUpdateForm?.patchValue({
          id: data.id,
          name: data.name,
        })
      }
    });
  }

  submit() {
    this.category = this.categoryUpdateForm?.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.categoryService.update(this.category, id).subscribe(
      () => {
        this.router.navigate(['/category/list']);
      }
      // ,
      // (error) => {
      //   console.log(error);
      // }
    );
  }
}
