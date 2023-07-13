import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { GlobalService } from 'src/app/services/global.service';

// import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {
    Aos.init();
  }

  constructor(public global: GlobalService) {
    this.global.getWomenBags().subscribe((data) => {
      this.global.womanBag = data.products;
    });
    this.global.getMensShoes().subscribe((data) => {
      this.global.manShoes = data.products;
    });
    this.global.getWomenDresses().subscribe((data) => {
      this.global.womanDress = data.products;
    });
    this.global.getWomenWatches().subscribe((data) => {
      this.global.watches = data.products;
    });
    this.global.getMensSunglasses().subscribe((data) => {
      this.global.sunglasses = data.products;
    });
    this.global.getMensShirts().subscribe((data) => {
      this.global.menShirts = data.products;
    });
  }
}
