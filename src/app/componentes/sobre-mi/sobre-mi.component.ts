import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  pers: persona[] = [];
  


  constructor(public personaService: PersonaService, private router:Router, private authService: AuthService) { }
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
