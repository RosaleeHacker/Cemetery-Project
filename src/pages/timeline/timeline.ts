import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html'
})
export class TimelinePage {

  timelineList$: Observable<Vegetation[]>;

  constructor(public navCtrl: NavController, private timeline: DatabaseAccessService) {
    this.timelineList$ = this.timeline.getTimelineData().snapshotChanges().map(
      changes => {
        console.log('Changes thingy: ' + changes);
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      }
    );
  }

}
