import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TombstonesPage } from './tombstones';

@NgModule({
  declarations: [
    TombstonesPage,
  ],
  imports: [
    IonicPageModule.forChild(TombstonesPage),
  ],
})
export class TombstonesPageModule {}
