import { Component  } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent   {
  arr:any;
service:HotelsService;
  constructor(service1:HotelsService) { 
    this.service=service1;
    this.arr=this.service.hotels;
  
  }


}
  





