import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/categories');
  }

  save(category: any): Observable<Category> {
    console.log(category);

    return this.http.post<Category>(API_URL + '/categories', category);
  }

  findById(id: any): Observable<Category> {
    return this.http.get<Category>(API_URL + '/categories/' + id + '/find');
  }

  update(data: any, id: any): Observable<Category> {
    return this.http.put<Category>(API_URL + '/categories/' + id, data);
  }

  delete(id: any): Observable<Category> {
    return this.http.delete<Category>(API_URL + '/categories/' + id);
  }
}
