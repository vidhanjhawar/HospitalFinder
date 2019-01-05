import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the FirearticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

interface Articles {
  title: String;
  author: String;
  date: any;
  description: String;
}

@Injectable()
export class FirearticlesProvider {

  private articlesCollection: AngularFirestoreCollection<Articles>;
  article: Observable<Articles[]>

  constructor(public http: HttpClient, public afs: AngularFirestore) {
    console.log('Hello FirearticlesProvider Provider');
  }

  ShowArticles() {
    this.articlesCollection = this.afs.collection('article');
    this.article = this.articlesCollection.valueChanges();
    return this.article;
  }

}
