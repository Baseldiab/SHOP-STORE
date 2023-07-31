import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  id: number = 1;
  empty = true;
  totalPrice: number = 0;
  public qty: number = 1;

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
    console.log(this.global.cart[1].qty);
    this.updateTotalPrice(this.global.cart);

    console.log(this.qty);
    // console.log(this.totalPrice);
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
  updatePrice(inputValue: number = 1, priceValue: number) {
    let singlePrice = inputValue * priceValue;
    return singlePrice;
  }

  // =====================================
  // qty: number = 1
  validateInput(event: any, i: number) {
    this.qty === event?.target.value;
    if (this.qty < 1) {
      event.target.value === this.global.cart[i].qty;
    }
    this.qtyUpdate(this.qty, i);
  }
  // =====================================
  qtyUpdate(qty: number, i: number) {
    this.global.cart[i].qty === qty;
    this.functions.writeToStorage(this.global.cart, 'cart');
    this.updateTotalPrice(this.global.cart);
  }
  // =====================================
  updateTotalPrice(data: any) {
    let subs = 0;
    for (const item of data) subs += item.price * item.qty;

    this.totalPrice = subs;
  }
}
