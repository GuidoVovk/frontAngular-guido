import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState, User } from '@angular/fire/auth';
import { first } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private auth:Auth) { }
 
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return signOut(this.auth);
  }

  stateUser(){
    return authState(this.auth);
  }


}
