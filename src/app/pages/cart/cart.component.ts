import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // id: any;
  empty = true;

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.cart = this.functions.readFromStorage('cart');
    if (this.global.cart.length === 0) {
      this.empty = false;
    }
    console.log(this.global.cart.length);
  }
  // =====================================
  deleteMeal(i: any) {
    this.global.cart.splice(i, 1);
    let all = this.functions.readFromStorage('cart');
    all.splice(i, 1);
    this.functions.writeToStorage(all, 'cart');
    window.location.reload();
  }
  // =====================================
  sub_total = 1;
  product_price = 1;
  quantity = 1;
  transform(product_price: number, quantity: number, sub_total: number) {
    sub_total = product_price * quantity;
    sub_total += sub_total;
    return sub_total;
  }
  // =====================================
  updatePrice(inputValue: number = 1, priceValue: number) {
    let singlePrice = inputValue * priceValue;
    return singlePrice.toFixed(2);
  }
}
