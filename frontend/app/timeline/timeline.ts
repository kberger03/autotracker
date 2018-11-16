// timeline.ts
// timeline page for manipulating data 
import { Component, OnInit } from '@angular/core';
import { ActivesService } from '../services/actives.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'timeline-cmp',
  templateUrl: 'timeline.html'
})
export class TimelineComponent { 

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

}