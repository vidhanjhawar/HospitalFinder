import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorresultPage } from '../doctorresult/doctorresult';

/**
 * Generated class for the SearchDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-doctor',
  templateUrl: 'search-doctor.html',
})
export class SearchDoctorPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Ophthalmologist',
      'Dermatologist',
      'Cardiologist',
      'Psychiatrist',
      'Gastroenterologist',
      'Ear-Nose-Throat (ENT)',
      'Gynecologist / Obstetrician',
      'Neurologist',
      'Urologist',
      'Dentist',
      'Prosthodontist',
      'Psychologist'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getDoctorList(speciality) {
    this.navCtrl.push(DoctorresultPage,{data: speciality});
  }

}
