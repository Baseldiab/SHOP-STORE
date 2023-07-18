import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css'],
})
export class MenShirtsComponent {
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
    this.global.getMensShirts().subscribe(
      (data) => {
        this.global.menShirts = data.products;
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

  // ===================================================

  // ===================================================

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
