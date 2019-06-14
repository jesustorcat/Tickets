import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) {}

  datosRegistro: any;

  ngOnInit() {
    
    this.datosRegistro = {
      email: '',
      username: '',
      password1: '',
      password2: this.datosRegistro.password1,
    }

  }

  registrarUsuario(){
    this.AuthService.authRegister(this.datosRegistro).subscribe(
      (resultado: any) => {
        this.router.navigate(['/usuario/login']);
      },
      (error) => {
        console.log('Error ha introducido mal los datos.')
      }
    )
  }

}
