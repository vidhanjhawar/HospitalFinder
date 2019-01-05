import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullarticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fullarticle',
  templateUrl: 'fullarticle.html',
})
export class FullarticlePage {

  currentArticle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.currentArticle=this.navParams.get('data');
  }

}
