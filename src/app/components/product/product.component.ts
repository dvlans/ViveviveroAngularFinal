import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServices, Product } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  randomProduct:Product;

  product1:Product;
  product2:Product;
  product3:Product;

  product: any = {};

  constructor( private activatedRouter: ActivatedRoute,
                private _randomProducto:ProductsServices,
                private _productServices: ProductsServices) {

    this.activatedRouter.params.subscribe( params => {
      this.product = this._productServices.getProduct ( params['id'] );
      console.log(this.product);

      for (let i = 0; i < 1; i++) {

        this.randomProduct = this._randomProducto.getRandomProduct();
        this.product1 = this.randomProduct;

      }


      do{
        this.randomProduct = this._randomProducto.getRandomProduct();
        this.product2 = this.randomProduct;
      }
      while(this.product2 == this.product1)

      do{
        this.randomProduct = this._randomProducto.getRandomProduct();
        this.product3 = this.randomProduct;
      }
      while(this.product3 == this.product1 || this.product3 == this.product1)


      console.log(this.product1);
      console.log(this.product2);
      console.log(this.product3);

    } );
  }



}
