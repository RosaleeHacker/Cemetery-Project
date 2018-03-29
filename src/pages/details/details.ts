import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Vegetation} from "../../models/vegetation/vegetation.interface";
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  vegetation: Vegetation;
  disableBtn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeAudio: NativeAudio) {
    console.log(navParams.get("bush"));
    this.vegetation = navParams.get("bush");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
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
