import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
  idFilterCat:number | undefined;
  
  inputId(id:number){
    this.idFilterCat=id;
  }
}
