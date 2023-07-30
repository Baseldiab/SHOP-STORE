import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
})
export class WishComponent {
  id: any;
  empty = true;

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.wish = this.functions.readFromStorage('wish');
    if (this.global.wish.length === 0) {
      this.empty = false;
    }
    console.log(this.global.wish.length);
  }
  deleteMeal(i: any) {
    this.global.wish.splice(i, 1);
    let all = this.functions.readFromStorage('wish');
    all.splice(i, 1);
    this.functions.writeToStorage(all, 'wish');
    window.location.reload();
  }
}
