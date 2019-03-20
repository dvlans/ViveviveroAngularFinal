import { Component, OnInit } from '@angular/core';
import { InteriorServices, Interior } from '../../../services/interior.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.css']
})
export class InteriorComponent implements OnInit {

  interiores:Interior[] = [];


  constructor( private _interiorService:InteriorServices,
                private router:Router) { }

  ngOnInit() {
    this.interiores = this._interiorService.getInteriores();
    console.log(this.interiores);
  }

  verInterior (idx:number){
    this.router.navigate ( ['/productInterior', idx] )
  }

}
