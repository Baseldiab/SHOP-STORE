import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css'],
})
export class WatchesComponent {
  constructor(
    public global: GlobalService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.global.getMenWatches().subscribe(
      (data) => {
        this.global.menWatches = data.products;
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
