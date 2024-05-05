import { Component } from '@angular/core';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent {
  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  }
constructor(){
  this.user_records=JSON.parse(localStorage.getItem('users') || '{}');
//   this.user_records.some((v)=>{
// this.data.name=v.name;
// this.data.email=v.email;
// this.data.mobile=v.mobile;
// this.data.address=v.address;
// console.log(this.data);
//   });

}




}
