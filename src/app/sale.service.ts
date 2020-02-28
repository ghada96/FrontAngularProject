import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private baseUrl = 'http://localhost:8080/sales';

  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Access-Control-Allow-Headers', '*');

  constructor(private http: HttpClient) { }

  getSalesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,{headers: this.headers});
  }
}
