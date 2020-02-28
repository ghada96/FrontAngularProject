import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "./product";


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private baseUrl = 'http://localhost:8080/product';

  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Access-Control-Allow-Headers', '*');


  constructor(private http: HttpClient) {

  }
  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product,{headers: this.headers});
  }
  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,{headers: this.headers});
  }


  deleteProduct(id: Number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text' });
  }

  getProduct(id: Number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,{headers: this.headers});
  }

  updateProduct(id: number, value: Product): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, value,{headers: this.headers});
  }

}
