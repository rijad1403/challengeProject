import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../shared/models/user-login';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  loginForm: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginUser() {
    const userLogin: UserLogin = this.loginForm.value;
    this.loading = true;
    this.userService.login(userLogin).subscribe(data => {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.loading = false;
      if (data.user.hasSelectedInfluencers) {
        this.router.navigate(['news-feed']);
      } else {
        this.router.navigate(['select-influencers']);
      }
    }, error => {
      this.loading = false;
      document.querySelector('#login-wrong-validation').classList.remove('d-none');
      setTimeout(() => {
        document.querySelector('#login-wrong-validation').classList.add('d-none');
      }, 3000);
    }
    );

  }

}
