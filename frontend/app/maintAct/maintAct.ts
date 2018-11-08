// maintAct.ts
// maintAct page for manipulating data 
import { Component, OnInit } from '@angular/core';
import { ActivesService } from '../services/actives.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'maintAct-cmp',
  templateUrl: 'maintAct.html'
})
export class MaintActComponent { 

  actives: any = [];
  active: any = '';
  selectedActive: any = '';
  deletedActive: any = '';

  constructor(private activesService: ActivesService, private router: Router){
  }

// on load of page
ngOnInit() {
  this.activesService.getActives().subscribe(data => {
    this.actives = data.objects;
  });
}


// opens edit actives modal
openEditActiveModal(active: any){
    this.selectedActive = active;
    $('#editActiveModal').modal("show"); 
}

// opens delete active modal
  openDeleteActiveModal(active: any){
    this.deletedActive = active;
    $('#deleteActiveModal').modal("show"); 
}

// actions for edit active submission
 onEditSubmit(value: any){
  this.activesService.updateActive(value).subscribe(data => {
    $('#editActiveModal').modal("hide");
    // this.router.navigateByUrl('menu'); //may need later
  });
}

//actions for closing edit active modal without saving
closeEditActiveModal(){
    // this.router.navigateByUrl('/menu'); //may need later
    $('#editActiveModal').modal("hide");
    window.location.reload();
}

//actions for delete active modal 
 deleteActive(value: any){
  this.activesService.deleteActive(value).subscribe(data => {
    console.log(data);
    $('#deleteActiveModal').modal("hide");   
    window.location.reload();
    // this.router.navigateByUrl('menu');
  });
 }

}