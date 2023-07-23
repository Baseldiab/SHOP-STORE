import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public global: GlobalService,
    public functions: FunctionService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) {}
}
