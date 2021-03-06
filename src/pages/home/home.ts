import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { FireAuthenticationProvider } from '../../providers/fire-authentication/fire-authentication';
import { SearchHospitalPage } from '../../pages/search-hospital/search-hospital';
import { Events } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild ('user') user;
  @ViewChild ('passwd') passwd;
  log: string;

  showAlert(msgtitle, message) {
    const alert = this.alertCtrl.create({
      title: msgtitle,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  constructor(public afAuth: AngularFireAuth, public events: Events, public fAuth: FireAuthenticationProvider ,public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.log='LogIn';
  }

  Login() {
    this.fAuth.loginUser(this.user.value,this.passwd.value).then( data => {
      this.navCtrl.setRoot(SearchHospitalPage);
        this.events.publish('user:created', true);
    })
    .catch( error => {
      this.showAlert('Error', error.message);
    });
  }

  Register() {
    this.fAuth.registerUser(this.user.value,this.passwd.value).then( data => {
      this.showAlert('Success','You are registered');
    })
    .catch( error => {
      this.showAlert('Error', error.message);
    });
  }
}
