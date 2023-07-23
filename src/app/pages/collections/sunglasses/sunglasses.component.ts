import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.css'],
})
export class SunglassesComponent {
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getMensSunglasses().subscribe(
      (data) => {
        this.global.sunglasses = data.products;
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
