import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-men-shirts',
  templateUrl: './men-shirts.component.html',
  styleUrls: ['./men-shirts.component.css'],
})
export class MenShirtsComponent {
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
}
