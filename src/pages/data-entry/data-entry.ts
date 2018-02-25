import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {ToastService} from "../../services/toast/toast.service";

/**
 * Generated class for the DataEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-data-entry',
  templateUrl: 'data-entry.html',
})
export class DataEntryPage {

  vegetation = {} as Vegetation;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataEntryService: DatabaseAccessService,
              private toastService: ToastService) {

  }

  addVegetation(vegetation: Vegetation) {
    try {
      let name = vegetation.name;
      this.dataEntryService.addVegetationData(vegetation).then(ref => {

        this.toastService.show(`${name} successfully saved!`);
        console.log(ref.key);
      })
    }
    catch (e) {
      console.log(e);
    }

    this.vegetation.name = "";
    this.vegetation.description = "";
  }

}
