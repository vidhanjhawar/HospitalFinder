import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirearticlesProvider } from '../../providers/firearticles/firearticles';
import { FullarticlePage } from '../fullarticle/fullarticle';


/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
  
  articleList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fireart: FirearticlesProvider) {}

  ngOnInit(){
    this.articleList= this.fireart.ShowArticles();
    this.articleList.subscribe(x=>console.log(x));
  }
  
  ReadFullArticle(article){
    this.navCtrl.push(FullarticlePage, { data: article } );
  }

  
}
