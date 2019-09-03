import { Injectable } from '@angular/core';
import {products, Product} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Product[]=[];
  total:number=0;
  constructor() { }

  addToCart(id:number){
    products[id-1].quantity+=1;
  }
  subtractFromCart(id:number){
    products[id-1].quantity-=1;
  }
  getCartItems(){
    for(let i in products){
      if(products[i].quantity!=0){
        this.cart.push(products[i]);
        this.total+=products[i].quantity*products[i].price;
      }
    }
    return this.cart
  }
  getTotal():number{
    return this.total;
  }
}
