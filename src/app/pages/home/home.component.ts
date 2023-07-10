import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {
    Aos.init();
  }
}
