import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchValue: any;
  search = false;
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    // this.global.getProductBySearch().subscribe((data) => {
    //   this.global.searchBox = data.products;
    // });
  }
  searchBox() {
    this.search == true;
    this.global.getProductBySearch(this.searchValue).subscribe((data) => {
      this.global.searchBox = data.products;
      console.log(this.global.searchBox);
      console.log(this.searchValue);
    });
  }
}
