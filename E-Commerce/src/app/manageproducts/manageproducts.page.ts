import { Component, OnInit } from '@angular/core';
import {Product,products} from '../models/products';
@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.page.html',
  styleUrls: ['./manageproducts.page.scss'],
})
export class ManageproductsPage implements OnInit {
  p:Product[];
  constructor() { }

  ngOnInit() {
    this.p=products;
    console.log(this.p);
  }

}
