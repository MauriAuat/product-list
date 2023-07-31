import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { Subcategoria } from 'src/app/models/subcategory.interface';
import { ProductsService } from 'src/app/services/products.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.css']
})
export class CardFilterComponent implements OnInit {
  productos:Product[]=[];
  subcategorias: Subcategoria[]=[];
  urlBase='https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
  extension= '-med.jpg';


  idCat!:number;
  constructor(private productService:ProductsService, private subcategoriaService:SubcategoryService,private route:ActivatedRoute) { }

  
  ngOnInit(): void { 
    this.route.params.subscribe(params=>{

      this.subcategoriaService.idCatObs.subscribe((newNumber)=>{this.idCat = newNumber;})

      this.productService.getProducts().subscribe(producto=>{
        this.productos =producto.filter(pr=>pr.id_subcategoria===this.idCat);
      });

      this.subcategoriaService.getSubCategory().subscribe(data=>{
        this.subcategorias=data;
      })

      this.productos=this.productos.filter(el=>{el.id_subcategoria===this.idCat})
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
