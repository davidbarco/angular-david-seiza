import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutService } from '../../services/aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  procesando: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AutService
  ){

  }

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  iniciarSesion(){
    if (this.form.valid) {
      this.procesando = true;
      const {email, password} = this.form.getRawValue();
     /*  "email": "john@mail.com",
         "password": "changeme" */

      this.authService.login(email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.authService.setAccessToken(data.access_token);
        },
        error: (error) => {
          console.error(error);
          this.procesando = false;
          alert("credenciales invalidas")
        },
        complete: () => {
          this.router.navigateByUrl('/app/dashboard');
          this.procesando = false;
        }
      });
    }else{
      this.form.markAllAsTouched();
    }
  }

}
