import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


/**
 * Generated class for the HistoryTrailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-trails',
  templateUrl: 'history-trails.html',
})
export class HistoryTrailsPage {

  disableBtn: boolean;

  constructor( public nativeAudio: NativeAudio, public navCtrl: NavController, public navParams: NavParams) {
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
