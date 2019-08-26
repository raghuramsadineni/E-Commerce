import { Injectable } from '@angular/core';
import {Product,products} from '../models/products';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts=products;
  private pro = new BehaviorSubject<Product[]>(this.allProducts);
  products=this.pro.asObservable();
  constructor() { }
}
