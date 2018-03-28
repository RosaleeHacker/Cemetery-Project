import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Tombstone} from "../../models/tombstone/tombstone.interface";

/**
 * Generated class for the TombstoneDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tombstone-details',
  templateUrl: 'tombstone-details.html',
})
export class TombstoneDetailsPage {

  tombstone: Tombstone;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("tombstone"));
    this.tombstone = navParams.get("tombstone");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TombstoneDetailsPage');
  }

}
