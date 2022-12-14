import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { CommonModule } from '@angular/common';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/estudios/edit-educacion.component';
import { NewEducacionComponent } from './componentes/estudios/new-educacion.component';
import { NewSkillsComponent } from './componentes/habilidades/new-skills.component';
import { EditSkillsComponent } from './componentes/habilidades/edit-skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi/edit-sobre-mi.component';
import { GuardGuard } from './guard.guard';









@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    NuevoProyectoComponent,
    EditProyectoComponent,
    NavbarComponent,
    EditSobreMiComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule
  ],
  providers: [GuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
