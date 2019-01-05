import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import 'rxjs/add/operator/take';
import { SearchHospitalPage } from '../search-hospital/search-hospital';
import { auth } from 'firebase';
import { EditprofilePage } from '../editprofile/editprofile';
import { Observable } from 'rxjs';
/**
 * Generated class for the ProfilePage page.
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
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  profileData: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.afAuth.authState.take(1).subscribe(data=>{
    this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
  })
  }

  EditProfile() {
    this.navCtrl.push(EditprofilePage);
  }

}
