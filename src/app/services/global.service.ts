import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  loadingFlag = true;
  allProduct: any[] = [];
  manShoes: any[] = [];
  womanShoes: any[] = [];
  womanDress: any[] = [];
  watches: any[] = [];
  menWatches: any[] = [];
  sunglasses: any[] = [];
  menShirts: any[] = [];
  womanBag: any[] = [];
  lighting: any[] = [];
  laptops: any[] = [];
  smartPhones: any[] = [];
  groceries: any[] = [];
  furniture: any[] = [];
  image: any[] = [];
  limited: any[] = [];

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
  // =====================================================
  baseUrl = 'https://dummyjson.com/';
  // =====================================================
  getAllProduct(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/`);
  }
  // =====================================================
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}products/${id}`);
  }
  // =====================================================
  getLimitedProduct(numberProduct: any, id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}products?limit=${numberProduct}&skip=${id}&select=title,price`
    );
  }
  // =====================================================
  // Get products of a category
  getFurniture(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/furniture`);
  }
  getGroceries(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/groceries`);
  }
  getSmartphones(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/smartphones`);
  }
  getLaptops(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/laptops`);
  }
  getLighting(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/lighting`);
  }
  getMenWatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-watches`);
  }
  getWomenWatches(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-watches`);
  }
  getMensShoes(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-shoes`);
  }
  getWomenShoes(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-shoes`);
  }
  getWomenBags(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-bags`);
  }
  getWomenDresses(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/womens-dresses`);
  }
  getMensShirts(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/mens-shirts`);
  }
  getMensSunglasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}products/category/sunglasses`);
  }
  // =====================================================
}
