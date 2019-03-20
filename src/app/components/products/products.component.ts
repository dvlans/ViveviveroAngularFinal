import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {


  }

  redirectInterior() {
  this.router.navigate(['/interior']);
  }

  redirectExterior() {
  this.router.navigate(['/exterior']);
  }

  redirectCactus() {
  this.router.navigate(['/cactus']);
  }
}
