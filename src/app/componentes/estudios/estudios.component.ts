import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { AuthService } from 'src/app/service/auth/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private router:Router, private authService: AuthService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

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

  cargarEducacion():void{
    this.educacionS.lista().subscribe(
      data =>{
        this.educacion = data;
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
  }

}
