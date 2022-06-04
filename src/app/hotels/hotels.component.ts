import { Component  } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent   {
arr:any[]=[];
service:HotelsService;

  constructor(private router:Router,service1:HotelsService) { 
    this.service=service1;
  
  }
  getProducts(){
    this.service.getAllProducts().subscribe(data=>{
      console.log(data);
      this.arr=data;
    
   
      console.log(this.arr);
      
    },error=>{
        console.log(error);
    });

  
    

}
bookingService(id:any){
  console.log("inside function");

  this.arr.forEach(a=>{
    if(id==a.hotelId){
      a.status = "booked";
      console.log(a.status);
    }
  });
}
sendHotel(root:string,name:string){
  this.arr.forEach(a=>{
    if(name==a.hotelName){
      this.service.recieveHotel(a);
      console.log(a);
    }
  });
  this.router.navigate([`${root}`]);
 


}
ngOnInit(): void {
  this.getProducts();
}


}
  







