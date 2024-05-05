import { Component } from '@angular/core';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent {

  user_records: any[] = [];
  data = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: ""
  }
  doRegistration(Values: any) {
    if (this.data.name == "") {
      alert(`Name is not blank`);

    }
    else if (this.data.email == "") {
      alert(`Email is not blank`);
    }
    else if (this.data.mobile == "") {
      alert(`Mobile is not blank`);
    }
    else if (this.data.address == "") {
      alert(`Address is not blank`);
    }
    else if (this.data.password == "") {
      alert(`Password is not blank`);
    }
    else {
      //this.user_records=JSON.parse(localStorage.getItem('users') || '{}');
      if (this.user_records.some((v) => { return v.email == this.data.email })) {
        alert("duplicate data");
      }
      else {
        this.user_records.push(this.data);


        localStorage.setItem("users", JSON.stringify(this.user_records));

        alert("Hi " + this.data.name + " you are successfully registered");

      }


    }


  }
}
