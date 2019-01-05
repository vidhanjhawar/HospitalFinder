import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { SearchHospitalPage } from '../search-hospital/search-hospital';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface Profile {
  UserName: String;
  FirstName: String;
  LastName: String;
  DOB: Date;
  Address: String;
  PinCode: Number;
  Mobile: Number;
  BloodGroup: String;
  profilePic: String;
}

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})

export class EditprofilePage {

  profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  setProfileData() {
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=> this.navCtrl.push(SearchHospitalPage));
    })
  }


}
