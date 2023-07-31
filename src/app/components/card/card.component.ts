import { Component, OnInit,NgModule } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { Subcaterogia } from 'src/app/models/subcategory.interface';
import { ProductsService } from 'src/app/services/products.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productos:Product[]=[];
  subcategorias: Subcaterogia[]=[];
  urlBase='https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
  extension= '-med.jpg';
  constructor(private productService:ProductsService, private subcategoriaService:SubcategoryService) { }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(producto=>{
      
      this.productos =producto;
      
    });
    this.subcategoriaService.getSubCategory().subscribe(data=>{

      this.subcategorias=data;
    })
  }
  //hago una busqueda de la categoria desde el array de categorias y el producto iterado; devuelve el nombre de la categoria
  getCategory(id:number):string{
    let cat =this.subcategorias.find((cat)=>{  
     return cat.id===id;
    })
   
   // evito el error por consola en el navegador dado por leer undefined
     if(cat==undefined){
      return "undefined";
    }else{
      return  cat!.nombre;
    }
      
  }

  addToCart(product:Product){
    return this.productService.addProduct(product);
  }
}
