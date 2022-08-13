import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  expe: Experiencia[] = [];

  constructor(public sExperiencia: SExperienciaService, private authService: AuthService, private router:Router) {}

  public isLogged = false;

  ngOnInit(): void {
  this.cargarExperiencia();
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

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }
  
  onClick(){
    this.authService.logout()
     .then(() =>{
       this.router.navigate(['/nuevaexp']);
     })
     .catch(error => console.log(error));
    
  }

  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}

