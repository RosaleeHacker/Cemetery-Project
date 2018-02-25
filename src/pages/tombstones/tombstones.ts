import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs/Observable";
import {Tombstone} from "../../models/tombstone/tombstone.interface";
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";

/**
 * Generated class for the TombstonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tombstones',
  templateUrl: 'tombstones.html',
})
export class TombstonesPage {

  tombstoneList$: Observable<Tombstone[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private tombstone: DatabaseAccessService) {
    this.tombstoneList$= this.tombstone.getTombstoneData().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TombstonesPage');
  }

}
