import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct } from 'src/app/model/interfaces/iproduct' ;
import { Location } from '@angular/common' 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
{

  constructor(private _actroute: ActivatedRoute , private _prdserv: ProductService , 
              private _loc :Location) { }
  prd: Iproduct ;
  ngOnInit(): void 
  {
    let pid = this._actroute.snapshot.params["id"];
    console.log(pid);
    this.prd = this._prdserv.getproductbyid(pid) ;
    console.log(this.prd)
  }


  goBack() 
  {
    this._loc.back();
  }
}