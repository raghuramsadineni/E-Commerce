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
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.p=this.cart.getCartItems();
    console.log(this.p);
  }

}
