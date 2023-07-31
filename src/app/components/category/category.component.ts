import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subcategoria } from 'src/app/models/subcategory.interface';
import { SubcategoryService } from 'src/app/services/subcategory.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Subcategoria[]=[];
 

  constructor(private subcategoriaService:SubcategoryService) { }

  ngOnInit(): void {
    this.subcategoriaService.getSubCategory().subscribe(category=>{
      this.categories=category;
    })

  }
  getId(id:number){
    this.subcategoriaService.getIdCat(id);
  }
}
