import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../shared/models/user-register';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean;
  registerForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required])
    })
  }

  registerUser() {
    const userRegister: UserRegister = this.registerForm.value;
    this.loading = true;
    this.userService.register(userRegister).subscribe(data => {
      console.log(data);
      this.loading = false;
    }, error => {
      this.loading = false;
      document.querySelector('#reg-wrong-validation').classList.remove('d-none');
      setTimeout(() => {
        document.querySelector('#reg-wrong-validation').classList.add('d-none');
      }, 3000);
    })

  }

}
