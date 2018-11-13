// profile.ts
// profile page for manipulating data 
import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'profile-cmp',
  templateUrl: 'profile.html'
})
export class ProfileComponent { 

  vehicles: any = [];
  vehicle: any = '';
  selectedVehicle: any = '';
  deletedVehicle: any = '';

  constructor(private vehiclesService: VehiclesService, private router: Router){
  }

// on load of page
ngOnInit() {
  this.vehiclesService.getUserVehicles(localStorage.getItem("userId")).subscribe(data => {
    this.vehicles = data.objects;
  });
}


// opens edit vehicle modal
openEditVehicleModal(vehicle: any){
    this.selectedVehicle = vehicle;
    $('#editVehicleModal').modal("show"); 
}

// opens delete vehicle modal
  openDeleteVehicleModal(vehicle: any){
    this.deletedVehicle = vehicle;
    $('#deleteVehicleModal').modal("show"); 
}

// actions for edit vehicle submission
 onEditSubmit(value: any){
  this.vehiclesService.updateVehicle(value).subscribe(data => {
    $('#editVehicleModal').modal("hide");
    // this.router.navigateByUrl('menu'); //may need later
  });
  
}

//actions for closing edit vehicle modal without saving
closeEditVehicleModal(){
    // this.router.navigateByUrl('/menu'); //may need later
    $('#editVehicleModal').modal("hide");
    window.location.reload();
}

//actions for delete vehicle modal 
 deleteVehicle(value: any){
  this.vehiclesService.deleteVehicle(value).subscribe(data => {
    console.log(data);
    $('#deleteVehicleModal').modal("hide");   
    window.location.reload();
    // this.router.navigateByUrl('menu');
  });
 }

}