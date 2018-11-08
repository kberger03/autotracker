// login.ts
// Page for the admin to login
import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login.form';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.html'
})

export class LoginComponent { 

  constructor(
    private usersService: UsersService, 
    private authService: AuthService, 
    private router: Router ){
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  user = new LoginForm('', '');

//Actions upon submission
  onSubmit(value: any){
    this.authService.authenticate(value).subscribe(data => {
      if(data = 'Success'){
        console.log(value.login);
        this.usersService.getId(value.login).subscribe(id => {
          localStorage.setItem('userId', id.id);
          localStorage.setItem('userName', id.name);
          localStorage.setItem('userEmail', id.email);
          localStorage.setItem('userUsername', id.username);
          console.log(id);
        });
        this.router.navigateByUrl('profile'); //redirect to the profile page in success case
      }
    });
  }

}