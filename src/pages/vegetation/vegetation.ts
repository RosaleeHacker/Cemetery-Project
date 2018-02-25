import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {Observable} from "rxjs/Observable";
import {Vegetation} from "../../models/vegetation/vegetation.interface";

@Component({
  selector: 'page-vegetation',
  templateUrl: 'vegetation.html'
})
export class VegetationPage {

  vegetationList$: Observable<Vegetation[]>;

  constructor(public navCtrl: NavController, private vegetation: DatabaseAccessService) {
    this.vegetationList$ = this.vegetation.getVegetationData().snapshotChanges().map(
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
