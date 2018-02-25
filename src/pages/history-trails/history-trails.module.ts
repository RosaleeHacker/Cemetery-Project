import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryTrailsPage } from './history-trails';

@NgModule({
  declarations: [
    HistoryTrailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryTrailsPage),
  ],
})
export class HistoryTrailsPageModule {}
