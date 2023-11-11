import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  procesando: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  iniciarSesion(){
    if (this.form.valid) {
      this.procesando = true;
      //this.status = 'loading';
      const {email, password} = this.form.getRawValue();
      console.log(email, password)
      setTimeout(() => {
        this.form.reset();
        this.procesando = false;
        this.router.navigateByUrl('/app/dashboard');
      }, 2000);

    }
    this.form.markAllAsTouched();
  }

}
