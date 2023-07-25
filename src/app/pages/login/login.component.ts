import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // username: 'kminchelle',
  // password: '0lelplR',
  model: User = {
    username: 'kminchelle',
    password: '0lelplR',
  };
  msgError = null;
  userType: any;

  constructor(
    private global: GlobalService,
    private router: Router,
    private Activatedroute: ActivatedRoute
  ) {}

  handleSubmit(form: NgForm) {
    this.global.login(this.model)?.subscribe(
      (data) => {
        console.log(data);
        localStorage?.setItem('token', data.token);
        this.router.navigateByUrl('/collection/all');
      },

      (e) => {
        console.log(e.error.message);
        this.msgError = e.error.message;
      }
    );
  }
}
