import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:String="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public verPersonas():Observable<any> {
    return this.http.get<any>(this.url + "persona/encontrar/6");
  }
}
