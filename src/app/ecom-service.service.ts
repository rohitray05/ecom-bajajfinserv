import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EcomServiceService {

  constructor(private http:HttpClient) { }

  getProducts(){
    const url = '/assets/plp.json'
    return this.http.get(url);
  }  
}
