import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Vegetation} from "../../models/vegetation/vegetation.interface";

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  vegetation: Vegetation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("bush"));
    this.vegetation = navParams.get("bush");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
