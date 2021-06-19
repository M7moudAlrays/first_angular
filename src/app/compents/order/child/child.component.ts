import { ProductService } from './../../../services/product.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { Iproduct } from 'src/app/model/interfaces/iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() selectedCatID: number;
  @Output() TotalPriceChangedEvent: EventEmitter<number>;
  products: Iproduct[];
  total: number;
  constructor(protected _prodsev:ProductService) 
  {
    this.TotalPriceChangedEvent = new EventEmitter<number>();
    this.total = 0;
    this.products = this._prodsev.getallproducts() ; 
    console.log(`constructor ${this.selectedCatID}`);

  }
  ngOnChanges(): void {
    console.log(`ngOnChanges  ${this.selectedCatID}`);
    console.log(this.getProductsByCatID());

  }

  ngOnInit(): void {
    console.log(` ngOnInit ${this.selectedCatID}`);
  }

  
  getProductsByCatID(): Iproduct[]
  {
    return this._prodsev.getByCatID(this.selectedCatID);
  } 
  

  TotalPrice(price, count) {
    this.total += price * count ;
    this.TotalPriceChangedEvent.emit(this.total) ;
    console.log(this.total) ;

  }
}
