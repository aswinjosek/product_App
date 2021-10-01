import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-z]*')]],
    place: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
  });

  

  constructor(
    private fb: FormBuilder,
    private ds: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  register() {
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const place = this.registerForm.value.place;
    if (this.registerForm.valid) {
      this.ds.register(name, email, password, place).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl('login');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }

  clear() {
    this.registerForm.reset();
    console.log('clr works');
  }
}
