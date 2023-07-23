import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-womens-shoes',
  templateUrl: './womens-shoes.component.html',
  styleUrls: ['./womens-shoes.component.css']
})
export class WomensShoesComponent {
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getWomenShoes().subscribe((data) => {
         this.global.womanShoes = data.products;
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
