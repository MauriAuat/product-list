import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  myCartObs= this.productService.myCartObs;
  cantProd!:number;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.cantProdObs.subscribe((newNumber)=>{
      this.cantProd = newNumber;
    })
  }
  deleteProduct(id:number){

    const product = this.productService.findProductById(id);
    this.productService.deleteProduct(id);
    this.productService.modifyNumber(product!.cantidad*-1);
    
  }
  updateUnits(operation:string,id:number) {
    const product = this.productService.findProductById(id);

    if(operation==="decrease" && product!.cantidad>0){
        product!.cantidad = product!.cantidad -1;
        this.productService.modifyNumber(-1);
    }
    if(operation==="increase" && product!.cantidad<5){
        product!.cantidad = product!.cantidad +1;
        this.productService.modifyNumber(1);
    }
    if(product?.cantidad===0){
      this.deleteProduct(id);
    }
    
    }

    totalCount(){
      const result = this.productService.totalCount();
      return result;
    }
}
