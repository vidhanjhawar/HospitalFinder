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
import { ArticlesPage } from '../pages/articles/articles';
import { FirearticlesProvider } from '../providers/firearticles/firearticles';
import { HttpClientModule } from '@angular/common/http';
import { FullarticlePage } from '../pages/fullarticle/fullarticle';
import { SearchDoctorPage } from '../pages/search-doctor/search-doctor';
import { FiredoctorsProvider } from '../providers/firedoctors/firedoctors';
import { DoctorresultPage } from '../pages/doctorresult/doctorresult';
import { DoctorinfoPage } from '../pages/doctorinfo/doctorinfo';
import { FireAuthenticationProvider } from '../providers/fire-authentication/fire-authentication';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ProfilePage } from '../pages/profile/profile';

const fireAuth = {
  apiKey: "AIzaSyCdFBbnJFAH-1Sbb0YOS9araL_nf103s8M",
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
    ArticlesPage,
    FullarticlePage,
    SearchDoctorPage,
    DoctorresultPage,
    DoctorinfoPage,
    EditprofilePage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireAuth),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBlPHCxdtUottt_5BPIwwLNhf--ZxPL0og",
      libraries: ["places"]
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchHospitalPage,
    HospitalinfoPage,
    ArticlesPage,
    FullarticlePage,
    SearchDoctorPage,
    DoctorresultPage,
    DoctorinfoPage,
    EditprofilePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FirearticlesProvider,
    FiredoctorsProvider,
    FireAuthenticationProvider
  ]
})
export class AppModule {}
