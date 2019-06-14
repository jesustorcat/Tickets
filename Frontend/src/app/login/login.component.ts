import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router ) { }

  datosLogin: any;

  isLoginError: boolean = false;

  ngOnInit() {

    // Variables para el Login
    this.datosLogin = {
      username: '',
      password: '',
    }
  }

  iniciarSesion(){
    this.AuthService.authLogin(this.datosLogin).subscribe(
      (resultado: any) => {
        localStorage.setItem('key',resultado.key);
        this.router.navigate(['/home']);
        console.log(localStorage.getItem('key'));
      },
      (error: HttpErrorResponse) => {
        this.isLoginError = true;
        console.log('Error ha introducido mal los datos.')
      }
    )
  }
}
