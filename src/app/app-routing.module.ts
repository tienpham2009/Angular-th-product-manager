import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((module) => module.ProductModule),
  },
  {
    path: 'category',
    loadChildren: () =>
    import('./category/category.module').then((module) => module.CategoryModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
