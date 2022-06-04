import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { HotelsService } from '../hotels.service';
import { Rating } from '../rating';

@Component({
  selector: 'app-hotelnames',
  templateUrl: './hotelnames.component.html',
  styleUrls: ['./hotelnames.component.css']
})
export class HotelnamesComponent implements OnInit {


service:HotelsService;
arr:any;
feedback:string='';
rating:number=0;
feedback1:Feedback=<Feedback>{}
rating2:Rating=<Rating>{}

  constructor(service:HotelsService) {
    this.service=service
    this.arr = this.service.selectedHotel;
   }
OnSubmit1(id:string){
  console.log(id);
  this.feedback1.id=parseInt(id);
  this.feedback1.feedback=this.feedback;
  console.log(this.feedback1);
  this.service.setFeedback(this.feedback1).subscribe((data:any)=>{
    console.log(data);
  });
 



}
OnSubmit2(id:string){
  console.log(id);
  this.rating2.hotelId=parseInt(id);
  this.rating2.rating=this.rating;
  console.log(this.rating2);
  this.service.setRating(this.rating2).subscribe((data:any)=>{
    console.log(data);
  });

}
  ngOnInit(): void {
  }

}
