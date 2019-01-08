import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HospitalinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospitalinfo',
  templateUrl: 'hospitalinfo.html',
})
export class HospitalinfoPage {
    info: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info=navParams.get('data');
    console.log(this.info);
  }

  ionViewDidLoad() {
  }

}
