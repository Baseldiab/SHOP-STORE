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
        // this.product = data.id;
      });
    });
  }
  img(x: number, y: any) {
    if (x <= 2) return y[x];
  }
}
