import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
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
  baseUrl = 'https://dummyjson.com/';
  // =====================================================
  getSingleProduct(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}products/${id}`);
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
