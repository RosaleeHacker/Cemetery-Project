import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DatabaseAccessService} from "../../services/data-entry/data-access.service";
import {Observable} from "rxjs/Observable";
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-vegetation',
  templateUrl: 'vegetation.html'
})
export class VegetationPage {

  vegetationList$: Observable<Vegetation[]>;
  disableBtn: boolean;
  
  constructor(public navCtrl: NavController, private vegetation: DatabaseAccessService, public nativeAudio: NativeAudio) {
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
   
  startAudio() {
   this.nativeAudio.preloadComplex('test', '../../assets/audio/Downtown.mp3', 1, 1, 0);
   this.nativeAudio.play('test');
   this.disableBtn= true;    
   };

  stopAudio() {
    this.nativeAudio.stop('test');
    this.disableBtn= false;    

  };


}
