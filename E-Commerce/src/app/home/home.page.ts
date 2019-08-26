import { Component,OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  allProducts:Product[];
  constructor(private product:ProductService) {}
  ngOnInit() {
    this.product.products.subscribe(val =>{
      this.allProducts=val;
    });
  }
  add(name:string){
    console.log(name);
  }
}
