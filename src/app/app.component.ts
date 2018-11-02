import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase/app';
import 'firebase/auth';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    const fireAuth = {
      apiKey: "AIzaSyAhZXFxVpPN7vCKhKAVKH8r9SPQ3sykdmw",
      authDomain: "hospitalfinder-219716.firebaseapp.com",
      databaseURL: "https://hospitalfinder-219716.firebaseio.com",
      projectId: "hospitalfinder-219716",
      storageBucket: "hospitalfinder-219716.appspot.com",
      messagingSenderId: "294054111007"
    };
    firebase.initializeApp(fireAuth);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

