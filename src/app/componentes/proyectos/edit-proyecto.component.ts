import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectosService: ProyectosService, private activatedRouted: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate([''])
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRouted.snapshot.params['id'];
    this.proyectosService.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
