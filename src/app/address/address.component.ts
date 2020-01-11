import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
User:any;
  constructor() {
this.User={
name:'tejaswi',
title:'ui developer',
address:'jeremy ct',
phone:['9088090752','123456789','746375634757834']
}
}
  ngOnInit() {
  }

}
