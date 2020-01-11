import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
a:number=5;
message: string;

  constructor() {
  setInterval
 let currentDate=new Date();
this.message=currentDate.toDateString()+currentDate.toLocaleTimeString();
}
  ngOnInit() {
  }

}
