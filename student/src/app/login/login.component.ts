import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShowusersComponent } from '../showusers/showusers.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router: Router){

}
user_records: any[] = [];
data={
  email:"",
  password:""
}
doLogin(Values:any){
  if (this.data.email == "") {
    alert(`Name is not blank`);

  }
  else if (this.data.password == "") {
    alert(`Email is not blank`);
  }
  else{
    this.user_records=JSON.parse(localStorage.getItem('users') || '{}');
    if (this.user_records.some((v) => { return v.email==this.data.email && v.password==this.data.password })) {
      alert("Login Successfull");
      this.router.navigate(['/showusers'])
    }
    else {
      alert('Login Fail');
    }
  }
}

}
