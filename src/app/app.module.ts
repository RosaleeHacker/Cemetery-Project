import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import { BlogPage } from '../pages/blog/blog';
import { TimelinePage } from '../pages/timeline/timeline';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataEntryPage } from '../pages/data-entry/data-entry';
import { VegetationPage } from '../pages/vegetation/vegetation';
import { AboutPage } from '../pages/about/about';
import { HistoryTrailsPage } from '../pages/history-trails/history-trails';
import { TombstonesPage } from '../pages/tombstones/tombstones';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {FIREBASE_CREDENTIALS} from './firebase.credentials';
import {DatabaseAccessService} from "../services/data-entry/data-access.service";
import {ToastService} from "../services/toast/toast.service";
import {Camera} from "@ionic-native/camera";
import {FormUploadVegetationComponent} from "../components/form-upload-vegetation/form-upload-vegetation";
import { NativeAudio } from '@ionic-native/native-audio';
import {FormUploadTombstoneComponent} from "../components/form-upload-tombstone/form-upload-tombstone";
import {DetailsPage} from "../pages/details/details";
import {TombstoneDetailsPage} from "../pages/tombstone-details/tombstone-details";


@NgModule({
  declarations: [
    MyApp,
    DetailsPage,
    TombstoneDetailsPage,
    BlogPage,
    TimelinePage,
    HomePage,
    TabsPage,
    DataEntryPage,
    VegetationPage,
    AboutPage,
    TombstonesPage,
    HistoryTrailsPage,
    FormUploadVegetationComponent,
    FormUploadTombstoneComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage,
    TombstoneDetailsPage,
    BlogPage,
    TimelinePage,
    HomePage,
    TabsPage,
    DataEntryPage,
    VegetationPage,
    AboutPage,
    TombstonesPage,
    HistoryTrailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseAccessService,
    ToastService,
    Camera,
    NativeAudio
]

})
export class AppModule {}
