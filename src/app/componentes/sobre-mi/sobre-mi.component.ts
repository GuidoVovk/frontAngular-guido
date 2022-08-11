import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  persona:any;

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.verPersonas().subscribe(data => {this.persona = data});
  }

}
