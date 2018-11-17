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

    vehicles: any = [];
    nicknames: any = [];
    vehicle: any = '';

    constructor(private activesService: ActivesService, private vehiclesService: VehiclesService, private router: Router){
    }

    ngOnInit() {
        console.log(localStorage.getItem("userId"));
        this.vehiclesService.getUserVehicles(localStorage.getItem("userId")).subscribe(data => {
          this.vehicles = data.objects;
        //   this.vehicles.forEach((item :any) => {
        //     console.log("for this");
        //     this.nicknames.push(item.nickname);
        //   });
          console.log("I am here");
          console.log(this.vehicles);
        });
      }

    active = new addActiveModalForm(0, '', '', '');

    // Actions for form submission
    onSubmit(value: any){
        console.log(value); //for troubleshooting purposes
        value.vuserId = localStorage.getItem("userId");
        console.log("inside submit for active modal");
        console.log(value); //for troubleshooting purposes
        this.activesService.addActive(value).subscribe(data => {
        console.log(data); //for troubleshooting purposes
        $('#addActiveModal').modal("hide"); //hides modal
        window.location.reload();
        // this.router.navigateByUrl('menu'); // may need later
    });
  

    }

}