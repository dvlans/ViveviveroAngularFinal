import { Component, OnInit } from '@angular/core';
import { ProductsServices, Product } from '../../../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.css']
})
export class ExteriorComponent implements OnInit {

  products:Product[] = [];


  constructor( private _productsService:ProductsServices,
              private router:Router  ) {}

  ngOnInit() {
      this.products = this._productsService.getProducts();
      console.log(this.products);

  }

  verProduct (idx:number){
    this.router.navigate ( ['/product', idx] )
  }
}
