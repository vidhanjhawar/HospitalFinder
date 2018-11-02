import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Articles {
  title: String;
  Author: String;
  Date: any;
  Description: String;
}

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  private articlesCollection: AngularFirestoreCollection<Articles>;
  article: Observable<Articles[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore) {}

  ngOnInit(){
    this.articlesCollection = this.afs.collection('article');
    this.article = this.articlesCollection.valueChanges();
  }
  

  
}
