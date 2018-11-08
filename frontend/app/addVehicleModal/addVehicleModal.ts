// addVehicleModal.ts
// add a vehicle to the database
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { addVehicleModalForm } from './addVehicleModal.form';
import { VehiclesService } from '../services/vehicles.service';
import { UsersService } from '../services/users.service';

@Component({
  moduleId: module.id,
  selector: 'addVehicleModal-cmp',
  templateUrl: 'addVehicleModal.html'
})

export class addVehicleModalComponent { 

    constructor(private vehiclesService: VehiclesService, private router: Router){
    }

    vehicle = new addVehicleModalForm('', '', 0, '', '', '');

    // Actions for form submission
    onSubmit(value: any){
        console.log(value); //for troubleshooting purposes
        this.vehiclesService.addVehicle(value).subscribe(data => {
        console.log(data); //for troubleshooting purposes
        $('#addVehicleModal').modal("hide"); //hides modal
        window.location.reload();
        // this.router.navigateByUrl('menu'); // may need later
    });
  

    }

}