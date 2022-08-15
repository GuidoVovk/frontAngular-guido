import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsService: SkillsService, private authService: AuthService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

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

  cargarSkills():void{
    this.skillsService.lista().subscribe(
      data =>{
        this.skills = data;
      }, err => {
        alert("No se pudo cargar");
      }
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }

}
