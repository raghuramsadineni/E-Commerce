import { Component,OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  allProducts:Product[];
  constructor(private product:ProductService, private cart:CartService) {}
  ngOnInit() {
    this.product.products.subscribe(val =>{
      this.allProducts=val;
    });
  }
  add(id:number){
    this.cart.addToCart(id);
  }
  subtract(id:number){
    this.cart.subtractFromCart(id);
  }
}
