import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Iproduct2 } from 'src/app/model/interfaces/iproduct2';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product2Service 
{
  [x: string]: any;

  constructor(private _http :HttpClient) {}

  getallproducts(): Observable<Iproduct2[]> 
  {
      return this._http.get<Iproduct2[]>(`${environment.api_url}/products`)
  }
  getbyid(id): Observable<Iproduct2> 
  {
    return this._http.get<Iproduct2>(`${environment.api_url}/product/${id}`);
  }

  insertProduct(prd: Iproduct2): Observable<Iproduct2> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
      })
    };

    return this._http.post<Iproduct2>(`${environment.api_url}/product`, prd, httpOptions)
  }

}
