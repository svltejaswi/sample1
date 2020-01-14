import{ Component, OnInit ,Input} from '@angular/core';
import{ User } from './user.model' ;
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

@Input('user') user:User;
isToggle:boolean=true;
constructor() {

}
click()
{
this.isToggle=!this.isToggle;
}
ngOnInit() {
  }

}
