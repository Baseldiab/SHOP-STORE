import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

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
}
