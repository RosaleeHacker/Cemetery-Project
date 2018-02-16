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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {FIREBASE_CREDENTIALS} from './firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    TimelinePage,
    HomePage,
    TabsPage,
    DataEntryPage,
    VegetationPage,
    AboutPage
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
    BlogPage,
    TimelinePage,
    HomePage,
    TabsPage,
    DataEntryPage,
    VegetationPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
