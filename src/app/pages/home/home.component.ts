import { FunctionService } from './../../services/function.service';
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

  constructor(public global: GlobalService, public functions: FunctionService) {
    this.global.getWomenBags().subscribe(
      (data) => {
        this.global.womanBag = data?.products.slice(0, 4);
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getMensShoes().subscribe(
      (data) => {
        this.global.manShoes = data?.products;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );

    this.global.getWomenDresses().subscribe(
      (data) => {
        this.global.womanDress = data?.products;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getWomenWatches().subscribe(
      (data) => {
        this.global.watches = data?.products;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getMensSunglasses().subscribe(
      (data) => {
        this.global.sunglasses = data?.products.slice(0, 4);
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getMensShirts().subscribe(
      (data) => {
        this.global.menShirts = data?.products.slice(0, 4);
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getAllUsers().subscribe(
      (data) => {
        this.global.users = data?.users;
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.global.loadingFlag = false;
      }
    );
    this.global.getFurniture().subscribe(
      (data) => {
        this.global.furniture = data?.products;
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
