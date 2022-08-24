import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState, User } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  
  constructor(private auth:Auth) { }
 
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    this.isLoggedIn = true;
    return signInWithEmailAndPassword(this.auth, email, password);
    
  }

  logout(){
    return signOut(this.auth);
  }

  stateUser(){
    return authState(this.auth);
  }
  
  isAuthentic(){
    return this.isLoggedIn;
  }


}
