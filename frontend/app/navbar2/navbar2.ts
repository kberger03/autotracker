//navbar2.ts
//The navbar for the admin 
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'navbar2-cmp',
  templateUrl: 'navbar2.html'
})
export class navbar2Component { 

    // opens onLogout
    onLogout(){
      localStorage.clear();
    }
    
}
