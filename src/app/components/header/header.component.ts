import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  viewCart:boolean=false;
  cantProd!:number;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.cantProdObs.subscribe((newNumber)=>{
      this.cantProd = newNumber;
    })
  }
  onToogleCart(){
    this.viewCart= !this.viewCart;
  }
}
