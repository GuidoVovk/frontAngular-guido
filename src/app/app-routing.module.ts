import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/estudios/edit-educacion.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { NewEducacionComponent } from './componentes/estudios/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { EditSkillsComponent } from './componentes/habilidades/edit-skills.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NewSkillsComponent } from './componentes/habilidades/new-skills.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi/edit-sobre-mi.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent, canActivate: [GuardGuard]},
  {path:'editexp/:id', component: EditExperienciaComponent, canActivate: [GuardGuard]},
  {path: 'nuevaedu', component: NewEducacionComponent, canActivate: [GuardGuard]},
  {path: 'editedu/:id', component: EditEducacionComponent, canActivate: [GuardGuard]},
  {path: 'nuevaSkill', component: NewSkillsComponent, canActivate: [GuardGuard]},
  {path: 'editSkill/:id', component: EditSkillsComponent, canActivate: [GuardGuard]},
  {path: 'nuevoProyecto', component: NuevoProyectoComponent, canActivate: [GuardGuard]},
  {path: 'editProyecto/:id', component: EditProyectoComponent, canActivate: [GuardGuard]},
  {path: 'contacto', component: FooterComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'estudios', component: EstudiosComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'editPerfil/:id', component: EditSobreMiComponent, canActivate: [GuardGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
