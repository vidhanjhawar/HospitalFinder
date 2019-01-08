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
import { Events } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = SearchHospitalPage;

  profileData: any=null;
  check: boolean = false;

  pages: Array<{title: String, component: any}>;

  constructor( public afDatabase: AngularFireDatabase, public events: Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth, public auth: FireAuthenticationProvider) {

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
        this.check=true;
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

    events.subscribe('user:created', (condition) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.check=condition;
      if(this.check===true) {
        this.afAuth.authState.take(1).subscribe(data=>{
        this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();})

      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  Logout() {
    this.auth.logoutUser();
    this.check=false;
    this.nav.setRoot(HomePage);
  }

  login() {
    this.nav.setRoot(HomePage);
  }
}

