import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  p:Product[];
  total:number;
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.p=this.cart.getCartItems();
    this.total=this.cart.getTotal();
  }
  add(id:number){
    this.cart.addToCart(id);
  }
  subtract(id:number){
    this.cart.subtractFromCart(id);
  }
}
