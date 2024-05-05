import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private router:Router){

}
btnReg(){
this.router.navigate(['/register']);
}
btnLog(){
  this.router.navigate(['/login']);
}
btnShow(){
  this.router.navigate(['/showusers']);
}
}
