import { Iproduct } from 'src/app/model/interfaces/iproduct';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyInfo } from 'src/app/model/classes/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  title: string;
  cInfo: CompanyInfo;
  isServiceDisplayed: boolean;
  br:string ;
  products: Iproduct[] ;
  constructor() {
  
    this.br="../../../assets/ground3.jpeg" ;
    this.products =  [
      
      { id: 1, name: "sweater", price: 4000, quntity: 1 , categoryID: 1 , img:"../../../assets/sweater.jpg" },
      { id: 2, name: "Shirt1", price: 2000, quntity: 2 , categoryID: 1 , img:"../../../assets/Shirt1.jpg" },
      { id: 3, name: "koch", price: 6000, quntity: 1 , categoryID: 1 , img:"../../../../assets/koch.jpg" },
      { id: 4, name: "Bag", price: 6000, quntity: 2 , categoryID: 2 , img:"../../../assets/bag.jpg"},
      { id: 5, name: "jeans", price: 6000, quntity: 2 , categoryID: 2 , img:"../../../assets/ww1.jpg"},
      { id: 6, name: "jeans", price: 6000, quntity: 2 , categoryID: 2 , img:"../../../assets/ww2.jpg"},
      { id: 7, name: "Baby1", price: 6000, quntity: 3 , categoryID: 3 , img:"../../../assets/bb.jpg" },
      { id: 8, name: "Baby2", price: 6000, quntity: 3 , categoryID: 3 , img:"../../../assets/bb2.jpg" },
      { id: 9, name: "Baby3", price: 6000, quntity: 3 , categoryID: 3 , img:"../../../assets/bb3.jpg" }
    ]
    console.log("in constructor ");
  }

  ngOnChanges(): void {
    console.log("in ngOnChanges ");

  }
  ngOnInit(): void {
    console.log("in ngOnInit ");
  }



  Toggle() {
    this.isServiceDisplayed = !this.isServiceDisplayed;
    console.log("Done !!");

  }

}
