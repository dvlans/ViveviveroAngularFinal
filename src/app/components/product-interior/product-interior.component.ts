import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InteriorServices, Interior } from '../../services/interior.service';

@Component({
  selector: 'app-product-interior',
  templateUrl: './product-interior.component.html',
  styleUrls: ['./product-interior.component.css']
})
export class ProductInteriorComponent  {

  randomInterior:Interior;

  interior1:Interior;
  interior2:Interior;
  interior3:Interior;

  interior: any = {};

  constructor( private activatedRouter:ActivatedRoute,
                private _interiorService:InteriorServices,
                private _randomInterior:InteriorServices,) {

  this.activatedRouter.params.subscribe( params =>{
    this.interior = this._interiorService.getInterior ( params['id'] );
    

    for (let i = 0; i < 1; i++) {

      this.randomInterior = this._randomInterior.getRandomInterior();
      this.interior1 = this.randomInterior;

    }


    do{
      this.randomInterior = this._randomInterior.getRandomInterior();
      this.interior2 = this.randomInterior;
    }
    while(this.interior2 == this.interior1)

    do{
      this.randomInterior = this._randomInterior.getRandomInterior();
      this.interior3 = this.randomInterior;
    }
    while(this.interior3 == this.interior1 || this.interior3 == this.interior1)
  })
  }


}
