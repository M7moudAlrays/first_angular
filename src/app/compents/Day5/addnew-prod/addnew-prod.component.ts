import { Iproduct2 } from 'src/app/model/interfaces/iproduct2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product2Service } from 'src/app/services/product2.service';

@Component({
  selector: 'app-addnew-prod',
  templateUrl: './addnew-prod.component.html',
  styleUrls: ['./addnew-prod.component.css']
})
export class AddnewProdComponent implements OnInit 
{
  prd: Iproduct2 ;
  constructor(private _router: Router , private _serv: Product2Service) 
  {
    this.prd =  {id:10 , name: '',  description: '',  price: null,  quantity: null }
  }

  ngOnInit(): void {
  }
  add() {
    this._serv.insertProduct(this.prd).subscribe((data) => {
      console.log(data);
      this._router.navigateByUrl('/allbyapi');
    }, (err) => {
      console.log(err);
    })
  }
}


