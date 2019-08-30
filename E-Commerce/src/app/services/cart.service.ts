import { Injectable } from '@angular/core';
import {products, Product} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Product[];
  
  constructor() { }

  addToCart(id:number){
    products[id-1].quantity+=1;
  }
  subtractFromCart(id:number){
    products[id-1].quantity-=1
  }
  getCartItems(){
    return products.filter(res=>{
      res.quantity!=0;
    })
  }
}
