import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(private proyectosService: ProyectosService, private authService: AuthService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();

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

  cargarProyectos():void{
    this.proyectosService.lista().subscribe(
      data =>{
        this.proyectos = data;
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.proyectosService.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }

}
