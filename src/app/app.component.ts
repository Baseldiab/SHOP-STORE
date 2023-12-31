import { Component, HostListener, OnInit } from '@angular/core';
import * as Aos from 'aos';

import { GlobalService } from './services/global.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FunctionService } from './services/function.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-store';
  userType: any;
  mainNavbar: any = [];
  public qty: number = 1;
  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    // console.log();
    let user = localStorage.getItem('user');
    if (user) {
      global.isLogin = true;
    }
  }
  // ===================================================
  ngOnInit() {
    // localStorage.clear();
    Aos.init();
  }
  // ===================================================

  // ===================================================
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mainNavbar = document.getElementById('main-navbar');
    const numberScrollY = window.scrollY || 0;
    if (numberScrollY <= 20) {
      this.mainNavbar.style =
        'background-color:  transparent !important; box-shadow: none !important;';
    } else {
      this.mainNavbar.style =
        'background-color: #fff !important; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;';
      console.log('You are 100px from the top to bottom');
    }
  }
}
