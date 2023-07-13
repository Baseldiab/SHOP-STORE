import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
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
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}products/${id}`);
  }
  // =====================================================
  getLimitedProduct(id: any): Observable<any> {
    return this.http.get(
      `${this.baseUrl}products?limit=5&skip=${id}&select=title,price`
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
