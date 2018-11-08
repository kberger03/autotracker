// addActiveModal.ts
// add a active to the database
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { addActiveModalForm } from './addActiveModal.form';
import { VehiclesService } from '../services/vehicles.service';
import { UsersService } from '../services/users.service';
import { ActivesService } from '../services/actives.service';

@Component({
  moduleId: module.id,
  selector: 'addActiveModal-cmp',
  templateUrl: 'addActiveModal.html'
})

export class addActiveModalComponent { 

    constructor(private activesService: ActivesService, private router: Router){
    }

    active = new addActiveModalForm('', '', '');

    // Actions for form submission
    onSubmit(value: any){
        console.log(value); //for troubleshooting purposes
        this.activesService.addActive(value).subscribe(data => {
        console.log(data); //for troubleshooting purposes
        $('#addActiveModal').modal("hide"); //hides modal
        window.location.reload();
        // this.router.navigateByUrl('menu'); // may need later
    });
  

    }

}