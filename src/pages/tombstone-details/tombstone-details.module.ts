import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TombstoneDetailsPage } from './tombstone-details';

@NgModule({
  declarations: [
    TombstoneDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TombstoneDetailsPage),
  ],
})
export class TombstoneDetailsPageModule {}
