import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FunctionService {
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  constructor(private http: HttpClient) {}

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
  inStock(value: any) {
    if (value > 0) return 'IN STOCK';
    else {
      return 'OUT STOCK';
    }
  }
}
