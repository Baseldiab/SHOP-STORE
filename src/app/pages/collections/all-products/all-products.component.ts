import { Component, HostListener } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  constructor(public global: GlobalService) {}
  mainNavbar: any = [];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.mainNavbar = document.getElementById('main-navbar');
    const number =
      window.scrollY ||
      // document.documentElement.scrollTop ||
      // document.body.scrollTop ||
      0;
    if (number > 100) {
      this.mainNavbar.style =
        ' background-color: #fff !important; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;';
      console.log('You are 100px from the top to bottom');
    } else if (number <= 20) {
      this.mainNavbar.style =
        ' background-color:  transparent !important; box-shadow: none !important;';
    }
  }
}

// navPosition() {
//   this.mainNavbar = document.getElementById('main-navbar');
//   if (this.mainNavbar.scrollHeight !== 0) {
//     this.mainNavbar.style =
//       'top: 0; background-color: #fff !important; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;';
//   }
// }
