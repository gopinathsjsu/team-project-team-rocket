import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.hide = true;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    let loginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.auth.login(loginRequest).subscribe((data) => {
      let loginResponse = JSON.parse(JSON.stringify(data));
      if (loginResponse['success']) {
        this.auth.loggedIn = true;
        localStorage.setItem('token', loginResponse['message']);
        this.router.navigate([this.auth.redirectUrl]);
      }
      else {
        alert('Incorrect login');
      }
    });
  }

}
