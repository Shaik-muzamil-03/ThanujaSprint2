import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
 hotel1:hotels={
   hotelname:"TAJ",
   hotelid:111,
   hotelcost:1256,
   hotellocation:"tirupati",
   hotelstatus:"double beds",
   hotelrating:3,
 }
 hotel2:hotels={
  hotelname:"Robo-Dinner",
  hotelid:112,
  hotelcost:5678,
  hotellocation:"DR MAHAL",
  hotelstatus:"single bed",
  hotelrating:4,
 }
 hotel3:hotels={
  hotelname:"AndhraSpice",
  hotelid:113,
  hotelcost:6778,
  hotellocation:"chennai",
  hotelstatus:"single bed",
  hotelrating:5,
 }
 hotel4:hotels={
  hotelname:"Taboon",
  hotelid:114,
  hotelcost:7778,
  hotellocation:"bangloor",
  hotelstatus:"double bed",
  hotelrating:3,
 }
  hotels:hotels[] = [this.hotel1,this.hotel2,this.hotel3,this.hotel4]

}

interface hotels{
  hotelname:string;
  hotelid:number;
  hotelcost:number;
  hotellocation:string;
  hotelstatus:string;
  hotelrating:number;
}