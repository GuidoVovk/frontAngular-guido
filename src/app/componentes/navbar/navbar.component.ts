import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged = false;

  constructor(private router:Router, private authService: AuthService) { 
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

  ngOnInit(): void {
  }

  onClick(){
    this.authService.logout()
     .then(() =>{
       this.router.navigate(['/home']);
     })
     .catch(error => console.log(error));
    
  }

  onLogin(){
    this.router.navigate(['/login'])
  }

}
