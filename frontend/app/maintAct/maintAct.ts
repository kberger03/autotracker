// maintAct.ts
// maintAct page for manipulating data 
import { Component, OnInit } from '@angular/core';
import { ActivesService } from '../services/actives.service';
import { Router } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { maintActForm } from "./maintAct.form";
import { PDFService } from '../services/pdf.service';

@Component({
  moduleId: module.id,
  selector: 'maintAct-cmp',
  templateUrl: 'maintAct.html'
})
export class MaintActComponent { 

  actives: any = [];
  active: any = '';
  backUpActives: any = [];
  selectedActive: any = '';
  deletedActive: any = '';
  sortFlag: any = 0;

  constructor(private activesService: ActivesService, private vehiclesService: VehiclesService,  private pdfService: PDFService, private router: Router){
  }

  filterObj = new maintActForm('', '', '');

// on load of page
ngOnInit() {
  console.log("I am in maintpage. userId is ");
  console.log(localStorage.getItem("userId"));
  this.activesService.getUserActives(localStorage.getItem("userId")).subscribe(data => {
    console.log("wordy words");
    console.log(data);
    data.objects.forEach((el: any)=> {
      console.log(el.vehicleId);
      this.vehiclesService.getVehicle(el.vehicleId).subscribe(veh => {
        console.log(veh);
        console.log(veh.nickname);
        el.nickname = veh.nickname;
      });
    });
    console.log("after thought");
    console.log(data);
    this.actives = data.objects;
    this.backUpActives = this.actives;
    console.log(this.backUpActives);
  });

}

//page to PDF 
pagePDF(){
  console.log("I am pdf");
  this.pdfService.getPDF(this.actives).subscribe(data => { 
    console.log(data); 
    console.log("I'm in the pagePDF");
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

// opens filter modal
filterModal(active: any){
  $('#filterModal').modal("show"); 
}

// actions for filter submission
onFilterSubmit(){
  // console.log('inside filter submit');
  // console.log(this.actives);
  // this.actives = this.backUpActives;
  // console.log(this.actives);
  $('#filterModal').modal("hide");
}

//actions for clearing filter modal 
clearFilterModal(){
  // this.router.navigateByUrl('/menu'); //may need later
  // $('#filterModal').modal("hide");
  this.actives = this.backUpActives;
  // window.location.reload();
}

sortBy(col: any){
  if(this.sortFlag === 0){
    console.log(this.actives);
    this.actives = this.actives.sort((a: any, b: any) => {
      if(a[col] > b[col]){
        return 1;
      }else if(a[col] < b[col]){
        return -1;
      }
      return 0
    });
    console.log(this.actives);
    this.sortFlag = 1;
  } else {
    console.log(this.actives);
    this.actives = this.actives.sort((a: any, b: any) => {
      if(a[col] < b[col]){
        return 1;
      }else if(a[col] > b[col]){
        return -1;
      }
      return 0
    });
    console.log(this.actives);
    this.sortFlag = 0;
  }

}

filterBy(value: any){

  console.log('inside filter submit');
  console.log(this.actives);
  this.clearFilterModal();
  console.log(this.actives);

  console.log('enter filter');
  console.log (value.mtype);
  console.log (value.mechanic);
  console.log(this.backUpActives);

  if(value.nickname.length !== 0){
    this.actives = this.actives.filter((a: any) => {
      return a['nickname'].toLowerCase().startsWith(value.nickname.toLowerCase());
    });
  }

  if(value.mtype.length !== 0){
          this.actives = this.actives.filter((a: any) => {
            return a['mtype'].toLowerCase().startsWith(value.mtype.toLowerCase());
      });
  }

  if(value.mechanic.length !== 0){
    this.actives = this.actives.filter((a: any) => {
      return a['mechanic'].toLowerCase().startsWith(value.mechanic.toLowerCase());
    });
  }

}

// filterBy(value: any){
//   console.log(value);
//   //console.log(value.val.length);
//   console.log(this.backUpActives);
//   if(value.val.length === 0){
//       this.actives = this.backUpActives;
//   }else{
//       this.actives = this.actives.filter((a: any) => {
//           return a[value.typ].toLowerCase().startsWith(value.val.toLowerCase());
//       });
//   }
// }

}