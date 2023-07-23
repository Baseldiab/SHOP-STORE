import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-women-bags',
  templateUrl: './women-bags.component.html',
  styleUrls: ['./women-bags.component.css'],
})
export class WomenBagsComponent {
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getWomenBags().subscribe(
      (data) => {
        this.global.womanBag = data.products;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
  }
}
