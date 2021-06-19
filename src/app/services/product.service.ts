import { Iproduct } from 'src/app/model/interfaces/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
  
  private products :Iproduct[]
  constructor() 
  {
    this.products =  [
      { id: 1, name: "koch", price: 6000, quntity: 10 , categoryID: 1 , img:"../../../../assets/koch.jpg" },
      { id: 2, name: "sweater", price: 4000, quntity: 30 , categoryID: 1 , img:"../../../assets/sweater.jpg" },
      { id: 3, name: "Shirt1", price: 2000, quntity: 25 , categoryID: 1 , img:"../../../assets/Shirt1.jpg" },
      { id: 4, name: "Bag", price: 6000, quntity: 17 , categoryID: 2 , img:"../../../assets/bag.jpg"},
      { id: 5, name: "jeans", price: 6000, quntity: 80 , categoryID: 2 , img:"../../../assets/ww1.jpg"},
      { id: 6, name: "jeans", price: 6000, quntity: 12 , categoryID: 2 , img:"../../../assets/ww2.jpg"},
      { id: 7, name: "Baby1", price: 6000, quntity: 30 , categoryID: 3 , img:"../../../assets/bb.jpg" },
      { id: 8, name: "Baby2", price: 6000, quntity: 40 , categoryID: 3 , img:"../../../assets/bb2.jpg" },
      { id: 9, name: "Baby3", price: 6000, quntity: 29 , categoryID: 3 , img:"../../../assets/bb3.jpg" }
    ]
  }

  getallproducts():Iproduct[]
  { 
    return this.products ;
  }

  getByCatID(cat_id): Iproduct[] 
  {
    ///filter search in array and return arrary filtered
    return this.products.filter((prd) => {
      return prd.categoryID ==cat_id;
    })
  }

  getproductbyid(pid): Iproduct
  {
    return this.products.find(prd => prd.id=pid)
  }
  
}
