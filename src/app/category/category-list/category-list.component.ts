import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryService.getAll().subscribe((categoriesData: any) => {
      console.log(categoriesData);

      this.categories = categoriesData.data;
    });
  }

  delete(id: any): void {
    console.log(id);

    if (confirm('Ban chac chan muon xoa')) {
      this.categoryService.delete(id).subscribe(
        (res: any) => {
          if (res.status == 'success') {
            alert(res.message);
            this.getAll();
          }
          
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
