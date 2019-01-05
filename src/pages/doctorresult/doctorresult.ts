import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FiredoctorsProvider } from '../../providers/firedoctors/firedoctors';
import { DoctorinfoPage } from '../doctorinfo/doctorinfo';


/**
 * Generated class for the DoctorresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctorresult',
  templateUrl: 'doctorresult.html',
})
export class DoctorresultPage {

  info: any;
  doctorList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public firedoct: FiredoctorsProvider) {
    this.info=navParams.get('data');
    console.log(this.info);
  }

  ngOnInit(){
    this.doctorList= this.firedoct.showDoctors(this.info);
    this.doctorList.subscribe(x=>console.log(x));
  }

  showDetails(details) {
    this.navCtrl.push(DoctorinfoPage, {data : details});
  }

}
