import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { CardFilterComponent } from './components/card-filter/card-filter.component';

const routes:Routes =[
  {path: '', component:CardComponent},
  {path:'filtrado/:nombre', component:CardFilterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    CartComponent,
    CategoryComponent,
    CardFilterComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
