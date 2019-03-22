import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    email: null,
    password: null
  }

  public error = null;

  constructor( private http:HttpClient) { }

  onSubmit(){

    // console.log(this.user)
    return this.http.post('http://localhost:9000/api/login', this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit() {

  }

}
