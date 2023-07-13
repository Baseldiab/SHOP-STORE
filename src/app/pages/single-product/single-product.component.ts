import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  product: any;

  // catogor: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  relNumber: any;

  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('singleProduct');
      // let product: any;
      global.getSingleProduct(id).subscribe((data) => {
        this.singleProduct = data;
      });
      // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      // get related products
      global.getLimitedProduct(id).subscribe((data) => {
        this.product = data.products;
        console.log(this.product.length);
        this.relNumber = this.product.length;
        if (this.product.length < 6 && this.global.limited.length == 0) {
          return this.product.forEach((e: any) => {
            global.getSingleProduct(e.id).subscribe((data) => {
              this.global.limited.push(data);
            });
            console.log(this.global.limited.length);
          });
        }
      });
    });
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    // ===================================================
    this.global.getWomenBags().subscribe((data) => {
      this.global.womanBag = data.products;
    });
    this.global.getMensShoes().subscribe((data) => {
      this.global.manShoes = data.products;
    });
    this.global.getWomenShoes().subscribe((data) => {
      this.global.womanShoes = data.products;
    });
    this.global.getWomenDresses().subscribe((data) => {
      this.global.womanDress = data.products;
    });
    this.global.getWomenWatches().subscribe((data) => {
      this.global.watches = data.products;
    });
    this.global.getMenWatches().subscribe((data) => {
      this.global.menWatches = data.products;
    });
    this.global.getMensSunglasses().subscribe((data) => {
      this.global.sunglasses = data.products;
    });
    this.global.getMensShirts().subscribe((data) => {
      this.global.menShirts = data.products;
    });
    this.global.getLighting().subscribe((data) => {
      this.global.lighting = data.products;
    });
    this.global.getLaptops().subscribe((data) => {
      this.global.laptops = data.products;
    });
    this.global.getSmartphones().subscribe((data) => {
      this.global.smartPhones = data.products;
    });
    this.global.getFurniture().subscribe((data) => {
      this.global.furniture = data.products;
    });
    this.global.getGroceries().subscribe((data) => {
      this.global.groceries = data.products;
    });
  }
  // ===============================================================
  img(x: number, y: any) {
    if (x <= 2) return y[x];
  }
}
