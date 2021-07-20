import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];

  constructor() { }

  getAll(){
    return this.categories;
  }

  save(category: any){
    this.categories.push(category);
  }

  findById(id : any){
    return this.categories.find(item => item.id == id);
  }

  update(data : any , id: any){
    this.categories.forEach((category) => {
      if(category.id == id){
        category = data
      }
    });
   }

   delete(id : any){
     this.categories.forEach((category , index) => {
       if(category.id == id){
          this.categories.splice(index, 1)
       }
      })
    }

    deleteCategory(id: number) {
      this.categories = this.categories.filter(category => {
        return category.id !== id;
      });
    }


}
