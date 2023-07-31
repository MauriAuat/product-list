import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subcaterogia } from '../models/subcategory.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private url='https://static.compragamer.com/test/subcategorias.json';

  constructor(private http: HttpClient) { }

  getSubCategory():Observable<Subcaterogia[]>{
    return this.http.get<Subcaterogia[]>(this.url);
  }
}
