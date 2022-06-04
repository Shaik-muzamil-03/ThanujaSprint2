import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';
import { Rating } from './rating';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  selectedHotel:any;
  RootEndpoint:string='http://localhost:8080/hotel/'
  AllProductsEndPoint:string='http://localhost:8080/hotel/hotels';

  constructor(private http:HttpClient){
    
  }
  getAllProducts():Observable<any>{
    return this.http.get<any>(`${this.AllProductsEndPoint}`);

  }
  setFeedback(feedback:Feedback):Observable<Object>{
    return this.http.post<Object>(`${this.RootEndpoint+'feedback'}`,feedback);
  }
  setRating(rating:Rating):Observable<Object>{
    return this.http.post<Object>(`${this.RootEndpoint+'Rating'}`,rating);
  }
  recieveHotel(hotel:any){
    this.selectedHotel=hotel;
    console.log(this.selectedHotel);

  }
}
