import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { Iproduct } from 'src/app/model/interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Iproduct[];
  
  constructor(protected _prsrv: ProductService) 
  {
    this.products = this._prsrv.getallproducts();
  }
}
