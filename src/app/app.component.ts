import { Component } from '@angular/core';
import{ User } from './address/user.model' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user:User;
 constructor(){
 this.user=new User();

this.user.name="tejaswi";
this.user.title="ui developer";
this.user.address="137 jeremy ct";
this.user.phone=['1233456789','13432455','32454365'];
}
}