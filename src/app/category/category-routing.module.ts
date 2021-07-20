import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path : 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'update/:id',
    component: CategoryUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
