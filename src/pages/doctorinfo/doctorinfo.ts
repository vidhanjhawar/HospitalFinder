import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoctorinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctorinfo',
  templateUrl: 'doctorinfo.html',
})
export class DoctorinfoPage {

  currentDoctor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.currentDoctor=this.navParams.get('data');
    console.log(this.currentDoctor);
  }

}
