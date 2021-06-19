import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product2Service } from 'src/app/services/product2.service';
import { Iproduct2 } from 'src/app/model/interfaces/iproduct2';

@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css']
})
export class Details2Component implements OnInit {

  prd: Iproduct2; 
  constructor(private _activroute: ActivatedRoute , private _serv2 :Product2Service) { }

 
  ngOnInit(): void {
    let pid = this._activroute.snapshot.params["id"];
    this._serv2.getbyid(pid).subscribe((res) => {
      this.prd = res;
      console.log(res) ;
    }, (err) => {
      //console.log(err);
    })


    console.log(pid) ;
  }



}




