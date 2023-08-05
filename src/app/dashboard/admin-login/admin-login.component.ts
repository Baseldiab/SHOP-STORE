import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { FunctionService } from 'src/app/services/function.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  model: User = {
    username: 'atuny0',
    password: '9uQFF1Lh',
  };
  msgError = null;

  constructor(
    private global: GlobalService,
    private router: Router,
    public functions: FunctionService,
    private Activatedroute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.Activatedroute.data.subscribe((data) => {
      this.global.userType = data['userType'];
      if (
        this.global.userType == 'admin' &&
        localStorage.getItem('user') != null
      ) {
        this.global.navbarFlag = false;
        this.global.isLogin = true;
      }
      console.log(this.global.userType);
    });
  }

  handleSubmit(form: NgForm) {
    if (this.global.userType == 'user') {
      this.global.login(this.model)?.subscribe(
        (data) => {
          this.functions.writeToStorage(data, 'user');
          this.router.navigateByUrl('/collection/all');
        },

        (e) => {
          console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
      this.global.isLogin = true;
    } else if (this.global.userType == 'admin') {
      this.global.login(this.model)?.subscribe(
        (data) => {
          this.functions.writeToStorage(data, 'user');
          this.router.navigateByUrl('/dashboard/products');
          this.global.isLogin = true;
          this.global.navbarFlag = false;
        },

        (e) => {
          console.log(e.error.message);
          this.msgError = e.error.message;
        }
      );
    }
  }
}
