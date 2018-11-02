import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SearchHospitalPage } from '../search-hospital/search-hospital';
import { MenuPage } from '../menu/menu';

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

  constructor(public fire: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.log='LogIn';
  }

  getfirstpage() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.passwd.value)
    .then( data => {
      this.navCtrl.push(SearchHospitalPage);
    })
    .catch( error => {
      this.showAlert('Error', error.message);
    });
  }

  registerUser() {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.passwd.value)
    .then( data => {
      this.showAlert('Success','You are registered');
    })
    .catch( error => {
      this.showAlert('Error', error.message);
    });
  } 
}
