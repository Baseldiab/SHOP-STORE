import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/common';
// const $ = require( "jquery" );

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  // const $ = require( "jquery" );

  fromLowToHigh = true;
  highToLow = true;
  option = '';
  product: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  smartphones: any = [];
  firstProduct: any = [];
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    @Inject(DOCUMENT) private document: any
  ) {
    this._activatedRoute.paramMap.subscribe((params) => {});

    this.getProductId(0, 100);
  }
  // ===================================================
  getProduct(ele: any) {
    ele.forEach((e: any) => {
      this.global.getSingleProduct(e.id).subscribe((data: any) => {
        this.global.limited.push(data);
      });
    });
  }
  // ===================================================
  getProductId(n: any, i: any) {
    this.global.getLimitedProduct(0, 0).subscribe(
      (data) => {
        this.product = data?.products;
        this.product.sort(
          (a: any, b: any) => Number(a.price) - Number(b.price)
        );
        this.getProduct(this.product.slice(n, i));
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
  }
  
  //====================BUTTON SHOW MORE======================
  idFirst: number = 0;
  idLast: number = 9;
  showMore() {
    // this.idFirst = this.idFirst + 9;
    this.idLast = this.idLast + 9;
    console.log(this.idLast);
  }
  // =========================================================

  // ===================================================
}
