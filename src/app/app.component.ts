import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'firebase/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { SearchHospitalPage } from '../pages/search-hospital/search-hospital';
import { ProfilePage } from '../pages/profile/profile';
import { ArticlesPage } from '../pages/articles/articles';
import { SearchDoctorPage } from '../pages/search-doctor/search-doctor';
import { FireAuthenticationProvider } from '../providers/fire-authentication/fire-authentication';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = SearchHospitalPage;

  pages: Array<{title: String, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth, public auth: FireAuthenticationProvider) {

    this.pages = [
      { title: 'Search Hospital', component: SearchHospitalPage},
      { title: 'Search Doctor', component: SearchDoctorPage},
      { title: 'Health Articles', component: ArticlesPage},
      { title: 'My Profile', component: ProfilePage}
    ];


    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = SearchHospitalPage;
        authObserver.unsubscribe();
        console.log(user);
      } else {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  Logout() {
    this.auth.logoutUser();
  }
}

