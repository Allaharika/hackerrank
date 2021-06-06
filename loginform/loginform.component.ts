import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
    systemname:string="C001";
    name:string="John Smith";
  constructor() { }

  ngOnInit() {
  }

}



