import { Product2Service } from './../../../services/product2.service';
import { Component, OnInit } from '@angular/core';
import { Iproduct2 } from 'src/app/model/interfaces/iproduct2';

@Component({
  selector: 'app-allprods2',
  templateUrl: './allprods2.component.html',
  styleUrls: ['./allprods2.component.css']
})

export class Allprods2Component implements OnInit 
{
  prods: Iproduct2[] ;
  constructor(private _prod2serv: Product2Service) {}

  ngOnInit(): void 
  {
    this._prod2serv.getallproducts().subscribe((data) => 
    {
      this.prods = data;
      console.log(this.prods); 
    } , (err) => { console.log(err);  })
  }

}
