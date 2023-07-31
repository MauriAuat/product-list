import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private url:string ='https://static.compragamer.com/test/productos.json';
  
  private myList:Product[]=[];
  
  private myCart = new BehaviorSubject<Product[]>([]);
  public myCartObs = this.myCart.asObservable();
  private cantProd = new BehaviorSubject<number>(0);
  public cantProdObs = this.cantProd.asObservable();
  
  constructor(private http: HttpClient) { }
  
  getProducts():Observable<Product[]>{
    const productos =this.http.get<Product[]>(this.url)
    .pipe(//agrego la clave cantidad para que pueda ser usado a la hora de agregar el producto al carrito
    map((data: Product[])=>data.map(producto=>({...producto,cantidad:0})))
    );
    
    return productos;
  }
  
  addProduct(product:Product){
    //aumento el observable que me indica cuantos productos tengo en el carrito
    
    this.modifyNumber(1);

    //saber si mi carrito ya tiene productos
    //console.log(this.myList)
    if(this.myList.length ===0){
      product.cantidad=1;
      this.myList.push(product);
      this.myCart.next(this.myList);
      
    }else{//si no esta vacio busco el elemento si ya se encuentra agregado
      const productExist =this.myList.find(el=>{
        
        return el.id_producto ===product.id_producto;
      })
      if(productExist){//si se encuentra agregado entonces aumento su cantidad y lo agrego a la lista
        //  console.log(productExist);
        productExist.cantidad = productExist.cantidad+1;
        this.myCart.next(this.myList);
      }else{//sino establezco su cantidad en 1 y lo agrego recien a la lista
        product.cantidad =1;
        this.myList.push(product);
        this.myCart.next(this.myList);
      }
    }
  }
  
  deleteProduct(id:number){
  
    this.myList= this.myList.filter(el=>{
      return el.id_producto!=id;
    })
    this.myCart.next(this.myList);
  }
  
  findProductById(id: number) {
    return this.myList.find(el=>el.id_producto===id)
  }

  totalCount() {
    const result = this.myList.reduce((acc,product)=>{ return acc+ (product.cantidad*product.precio);},0);
    return result;
}
modifyNumber(num:number){
  

    this.cantProd.next(this.cantProd.getValue()+num);
  
}
}
