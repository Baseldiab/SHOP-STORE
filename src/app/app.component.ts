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
  mainNavbar: any = [];

  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    let token = localStorage.getItem('token');
    if (token) {
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
    const number = window.scrollY || 0;
    if (number <= 20) {
      this.mainNavbar.style =
        'background-color:  transparent !important; box-shadow: none !important;';
    } else {
      this.mainNavbar.style =
        'background-color: #fff !important; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;';
      console.log('You are 100px from the top to bottom');
    }
  }
}
