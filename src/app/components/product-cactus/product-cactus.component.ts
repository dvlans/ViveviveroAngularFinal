import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CactusServices, Cactus } from '../../services/cactus.service';

@Component({
  selector: 'app-product-cactus',
  templateUrl: './product-cactus.component.html',
  styleUrls: ['./product-cactus.component.css']
})
export class ProductCactusComponent {

  randomCactus: Cactus;

  cactus1:Cactus;
  cactus2:Cactus;
  cactus3:Cactus;

  cactus: any = {};

  constructor( private _activatedRoute:ActivatedRoute,
                private _cactusServices:CactusServices,
                private _randomCactus:CactusServices) {

  this._activatedRoute.params.subscribe( params => {
    this.cactus = this._cactusServices.getCactus ( params['id'] );


    for (let i = 0; i < 1; i++) {

      this.randomCactus = this._randomCactus.getRandomCactus();
      this.cactus1 = this.randomCactus;

    }

    do{
      this.randomCactus = this._randomCactus.getRandomCactus();
      this.cactus2 = this.randomCactus;
    }
    while(this.cactus3 == this.cactus1)

    do{
      this.randomCactus = this._randomCactus.getRandomCactus();
      this.cactus3 = this.randomCactus;
    }
    while(this.cactus3 == this.cactus1 || this.cactus3 == this.cactus1)

    console.log(this.cactus1);
    console.log(this.cactus2);
    console.log(this.cactus3);

    } );
  }

}
