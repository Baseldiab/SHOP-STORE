import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class FunctionService {
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  constructor(private http: HttpClient) {
    this.myWish = this.readFromStorage('wish');
    this.myCart = this.readFromStorage('cart');
    this.wishCount = this.myWish.length;
    this.cartCount = this.myCart.length;
  }

  //====================SORT PRODUCTS======================
  filterProduct(option: any, product: any) {
    if (option.value == 'Low') {
      product.sort((a: any, b: any) => Number(a.price) - Number(b.price));
    } else if (option.value == 'High') {
      product.sort((a: any, b: any) => Number(b.price) - Number(a.price));
    } else if (option.value == 'A-Z') {
      product.sort(
        function (low: any, high: any) {
          if (low.title < high.title) {
            return -1;
          } else if (low.title > high.title) {
            return 1;
          } else {
            return 0;
          }
        }
        // console.log(this.global.limited.slice(0, 9));
      );
    } else if (option.value == 'Z-A') {
      product.sort(
        function (low: any, high: any) {
          if (low.title > high.title) {
            return -1;
          } else if (low.title < high.title) {
            return 1;
          } else {
            return 0;
          }
        }
        // console.log(this.global.limited.slice(0, 9));
      );
    }
  }
  // =====================================================
  calculateRating(value: number) {
    let val = value - Math.trunc(value);
    if (val <= 0.5 && val != 0) return Math.floor(value) + 0.5;
    else if (val == 0) {
      return value;
    } else {
      return Math.ceil(value);
    }
  }
  // =====================================================
  cartArray: any = [];
  wishArray: any = [];
  myCart: any;
  myWish: any;
  cartCount: any = 0;
  wishCount: any = 0;

  addToCart(data: any, eve: any) {
    eve.target.disabled = true;
    this.cartArray.push(data);
    this.writeToStorage(this.cartArray, 'cart');
    this.myCart = this.readFromStorage('cart');
    this.cartCount = this.myCart.length;
  }

  // =====================================
  addToWish(data: any, eve: any) {
    eve.target.disabled = true;
    this.wishArray.push(data);
    this.writeToStorage(this.wishArray, 'wish');
    this.myWish = this.readFromStorage('wish');
    this.wishCount = this.myWish.length;
  }
  // =====================================================
  inStock(value: any) {
    if (value > 0) return 'IN STOCK';
    else {
      return 'OUT STOCK';
    }
  }
  // =========================================
  cart: any[] = [];
  all: any;
  readFromStorage(key = `products`) {
    this.all = localStorage.getItem(key) as String;

    return (this.cart = JSON.parse(this.all));
  }

  //===================================
  writeToStorage(data: any, key = `products`) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  // =========================================
}
