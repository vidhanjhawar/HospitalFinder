import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HospitalinfoPage } from '../pages/hospitalinfo/hospitalinfo'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';
import { AgmCoreModule } from '@agm/core';
import { SearchHospitalPage } from '../pages/search-hospital/search-hospital';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MenuPage } from '../pages/menu/menu';
import { ArticlesPage } from '../pages/articles/articles';

const fireAuth = {
  apiKey: "AIzaSyAhZXFxVpPN7vCKhKAVKH8r9SPQ3sykdmw",
  authDomain: "hospitalfinder-219716.firebaseapp.com",
  databaseURL: "https://hospitalfinder-219716.firebaseio.com",
  projectId: "hospitalfinder-219716",
  storageBucket: "hospitalfinder-219716.appspot.com",
  messagingSenderId: "294054111007"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchHospitalPage,
    HospitalinfoPage,
    MenuPage,
    ArticlesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireAuth),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBm2pES3FKpjopf53fchBnqlxT-Am0bClI",
      libraries: ["places"]
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchHospitalPage,
    HospitalinfoPage,
    MenuPage,
    ArticlesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase
  ]
})
export class AppModule {}
