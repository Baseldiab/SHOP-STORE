import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-store';

  constructor(
    public global: GlobalService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    // if ( ) {
    //   this.global.navbarShow = true;
    // }
  }
}
