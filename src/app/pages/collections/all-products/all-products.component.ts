import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  mainNavbar: any = [];
  product: any;
  productId: any;
  category: any;
  productName: any;
  singleProduct: any;
  smartphones: any = [];
  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.getLimitProductId(9, 0);
    });
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
  getLimitProductId(n: any, i: any) {
    this.global.getLimitedProduct(n, i).subscribe(
      (data) => {
        this.product = data?.products;
        this.getProduct(this.product);
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
  }
  // ===================================================
  id: number = 0;
  showMore() {
    // this.global.limited.push(x);
    this.id = this.id + 9;
    this.getLimitProductId(10, this.id);

    // let counter = num + 1;
    console.log(this.id);
  }
  // ===================================================
  // ===================================================
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mainNavbar = document.getElementById('main-navbar');
    const number = window.scrollY || 0;
    if (number > 100) {
      this.mainNavbar.style =
        ' background-color: #fff !important; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;';
      console.log('You are 100px from the top to bottom');
    } else if (number <= 20) {
      this.mainNavbar.style =
        'background-color:  transparent !important; box-shadow: none !important;';
    }
  }
}

// navPosition() {
//   this.mainNavbar = document.getElementById('main-navbar');
//   if (this.mainNavbar.scrollHeight !== 0) {
//     this.mainNavbar.style =
//       'top: 0; background-color: #fff !important; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;';
//   }
// }
