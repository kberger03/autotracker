// signup.ts
//The add user page 
import { Component } from '@angular/core';
import { SignupForm } from './signup.form';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'signup-cmp',
  templateUrl: 'signup.html'
})

export class SignupComponent { 

  constructor(private usersService: UsersService){
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
    });
  }

  user = new SignupForm('', '', '', '');

// actions upon submission of the form 
  onSubmit(value: any){
    console.log(value);
    this.usersService.addUser(value).subscribe(data => {
      console.log(data);
      $('#signup').modal("hide");  
    });
    
  }

}