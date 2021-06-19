import { AddnewProdComponent } from './compents/Day5/addnew-prod/addnew-prod.component';
import { Details2Component } from './compents/Day5/details2/details2.component';
import { Allprods2Component } from './compents/Day5/allprods2/allprods2.component';
import { CompanyInfo } from 'src/app/model/classes/company-info';
import { ProductDetailsComponent } from './compents/product-details/product-details.component';
import { PagenotFoundComponent } from './compents/pagenot-found/pagenot-found.component';
import { ProductsComponent } from './compents/products/products.component';
import { ParentComponent } from './compents/order/parent/parent.component';
import { HomeComponent } from './compents/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  // {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent} ,
  {path:'products',component:ProductsComponent} ,
  {path:'child',component:ParentComponent} ,
  {path:'product/:id',component:ProductDetailsComponent} ,
  {path:'allprods', component:Allprods2Component},
  {path:'prod/:id',component:Details2Component} ,
  {path: 'addnew' ,component:AddnewProdComponent} ,
  {path:'**', component:PagenotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{



}
