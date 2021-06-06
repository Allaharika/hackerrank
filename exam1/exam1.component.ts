import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam1',
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.css']
})
export class Exam1Component implements OnInit {
  hour:number;
  minute:number;
  second:number;
  countDowndate=new Date("Jun 3,2021 15:37:25").getTime();
  now=new Date().getTime();
  distance:number;
  

  constructor() { }

  ngOnInit() {
    
    setInterval(()=>{
      
      this.distance=this.countDowndate-this.now;
      
      this.hour=Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minute = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.second = Math.floor((this.distance % (1000 * 60)) / 1000);
      if(this.distance<0){
        clearInterval();
      }
      
    },1000)
  }
  
}
