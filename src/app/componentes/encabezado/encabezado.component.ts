import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  pers: persona[] = [];
  


  constructor(public personaService: PersonaService, private router:Router, private authService: AuthService) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
 
    this.authService.stateUser().subscribe( res => {
      if (res){
        console.log("está logueado");
        this.isLogged = true;
      } else {
        console.log("no está logueado");
        this.isLogged = false;
      } 
    })
    
  }

  onClick(){
    this.authService.logout()
     .then(() =>{
       this.router.navigate(['/home']);
     })
     .catch(error => console.log(error));
    
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(
      data =>{
        this.pers = data;
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

}
