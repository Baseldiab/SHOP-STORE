import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Aos from 'aos';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-women-dresses',
  templateUrl: './women-dresses.component.html',
  styleUrls: ['./women-dresses.component.css'],
})
export class WomenDressesComponent {
  title = 'app';
  ngOnInit() {
    Aos.init();
  }

  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getWomenDresses().subscribe((data) => {
         this.global.womanDress = data.products;
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
