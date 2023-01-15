import { Component } from '@angular/core';
import { fruits } from './fruits-list';


@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  userlist = fruits;
  
  data='';
  c=0;
  role=["user","executive","field-executive"]
  user :any=[{role : "user",name:"Tabassum Shaikh", email:"ts@gmail.com",phone:9137712095},
  {role : "user",name:"Farman Haider", email:"farman@gmail.com",phone:9137742095},
  {role : "executive",name:"Shrutika Chavahan", email:"shrutika@gmail.com",phone:9137912095},
  {role :"executive" , name:"Tab Shaikh", email:"tab@gmail.com", phone:9999364853},
  {role : "field-executive",name:"Noman Shaikh", email:"noman@gmail.com",phone:9138812095},
  {role : "field-executive",name:"Bharat Sutar", email:"bharat@gmail.com",phone:9138812095},

]
users :[{name :" ", email :'' ,phone : '', password:" "}]
cat: any;
  
 
}
