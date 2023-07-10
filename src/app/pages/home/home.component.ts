import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {
    Aos.init();
  }

  womanBag: any[] = [];
  manShoes: any[] = [];
  womanDress: any[] = [];
  watches: any[] = [];

  image: any[] = [];
  constructor(public global: GlobalService) {
    this.global.getWomenBags().subscribe((data) => {
      this.womanBag = data.products;
    });
    this.global.getMensShoes().subscribe((data) => {
      this.manShoes = data.products;
    });
    this.global.getWomenDresses().subscribe((data) => {
      this.womanDress = data.products;
    });
    this.global.getMenWatches().subscribe((data) => {
      this.watches = data.products;
    });
  }
}
