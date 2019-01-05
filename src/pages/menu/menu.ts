import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchHospitalPage } from '../search-hospital/search-hospital';
import { ArticlesPage } from '../articles/articles';
import { SearchDoctorPage } from '../search-doctor/search-doctor';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { FireAuthenticationProvider } from '../../providers/fire-authentication/fire-authentication';
import { EditprofilePage } from '../editprofile/editprofile';
import { ProfilePage } from '../profile/profile';


/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  user: any;
  constructor(public fAuth: FireAuthenticationProvider, public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  gettoLoginPage() {
    this.navCtrl.push(HomePage);
  }

  gettoHospitalPage() {
    this.navCtrl.push(SearchHospitalPage);
  }

  gettoArticlesPage() {
    this.navCtrl.push(ArticlesPage);
  }

  gettoDoctorsPage() {
    this.navCtrl.push(SearchDoctorPage);
  }

  gettoProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  Logout() {
    this.fAuth.logoutUser();
  }
}  
