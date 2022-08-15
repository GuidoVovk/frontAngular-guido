import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombreSkill: string = '';
  porcentaje: number = null;

  constructor(private skillService: SkillsService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.nombreSkill, this.porcentaje);
    this.skillService.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir");
      this.router.navigate(['']);
    }) 
  }

}
