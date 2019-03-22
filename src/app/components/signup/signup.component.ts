import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User = {
    email:null,
    name:null,
    lastname:null,
    password:null,
    address:null

  };
  constructor( private _userService:UserService ) {

  }

  ngOnInit() {
  }

  saveUser() {
    this._userService.save(this.user).subscribe( (data) => {
      alert("Película guardada");
      console.log(data);
    }, (error) => {
      console.log(error);
      alert("Ocurrió un error");
    });
  }

}
