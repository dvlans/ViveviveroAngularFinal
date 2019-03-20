import { Component, OnInit } from '@angular/core';
import { CactusServices, Cactus } from '../../../services/cactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cactus',
  templateUrl: './cactus.component.html',
  styleUrls: ['./cactus.component.css']
})
export class CactusComponent implements OnInit {

  cactuses: Cactus[] = []

  constructor( private router:Router,
                private _cactusServices:CactusServices) { }

  ngOnInit() {
    this.cactuses = this._cactusServices.getCactuses();
    console.log(this.cactuses)
  }

  verCactus(idx:number){
    this.router.navigate ( ['/productCactus', idx] )
  }

}
