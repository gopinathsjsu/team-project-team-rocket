import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  hide: boolean;
  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      passport: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      state: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    });
    this.hide = true;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
    this.auth.signup(this.signupForm.value).subscribe((data) => {
      let signupResponse = JSON.parse(JSON.stringify(data));
      if (signupResponse['success']) {
        this.router.navigate([this.auth.redirectUrl]);
      }
      else {
        alert(signupResponse['message']);
      }
    });
  }

}
