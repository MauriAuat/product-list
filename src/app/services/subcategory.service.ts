import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subcategoria } from '../models/subcategory.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private url='https://static.compragamer.com/test/subcategorias.json';

  private idCat = new BehaviorSubject<number>(0);
  public idCatObs = this.idCat.asObservable();

  constructor(private http: HttpClient) { }

  getSubCategory():Observable<Subcategoria[]>{
    return this.http.get<Subcategoria[]>(this.url);
  }
  getIdCat(id:number){
    
    this.idCat.next(id);
  }
}