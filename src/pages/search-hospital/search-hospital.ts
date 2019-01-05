import { Component,ViewChild,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsAPILoader} from '@agm/core';
import { HospitalinfoPage } from '../hospitalinfo/hospitalinfo';

/**
 * Generated class for the SearchHospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;

//declare let global: any;
@IonicPage()
@Component({
  selector: 'page-search-hospital',
  templateUrl: 'search-hospital.html',
})
export class SearchHospitalPage {
  @ViewChild("search")


  public searchElementRef;
  hospitals: any[];
  image: any;
  global: any;
  globalservice: any;
  constructor(public navCtrl: NavController, public zone: NgZone,private mapsAPILoader: MapsAPILoader) {
    this.hospitals = [];
  }

  ionViewDidLoad() {
    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('searching').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ['address']
        });

        this.getMyLocation(autocomplete);

        autocomplete.addListener("place_changed", () => {
          this.zone.run(() => {
            var geocoder: any;
            var loc: any;
            let place= autocomplete.getPlace();
            geocoder = new google.maps.Geocoder();
              var address = place.formatted_address;
              console.log(place);
              geocoder.geocode( { 'address': address},(results, status)=> {
                var coord={};
                if (status == google.maps.GeocoderStatus.OK) {

                console.log("Latitude: "+results[0].geometry.location.lat());
                console.log("Longitude: "+results[0].geometry.location.lng());
              loc={lat:results[0].geometry.location.lat(),lng:results[0].geometry.location.lng()};
            }
            this.getInfo(loc);
          });
            });
          });
  });
}

  getMyLocation(autocomplete) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
          });
        autocomplete.setBounds(circle.getBounds());
        this.getInfo(geolocation);
        });
      }
  }

  getInfo(loc) {
    console.log(loc);
    var pidArray: any []=new Array();
    var indore = {lat: 22.7196, lng: 75.8577};
    let Mymap = new google.maps.Map(document.getElementById('map'), {
      center: indore,
      zoom: 10
    });
    var service = new google.maps.places.PlacesService(Mymap);
    this.globalservice=service;
    service.nearbySearch({location: indore,radius : 1500, type:['hospital']},(field)=> {
      let i:any;
      var local=new Array();
      for(i=0;i<field.length;i++) {
        local.push([i,field[i].name,field[i].vicinity,field[i].place_id]);
      this.hospitals=local.slice();
  }
    })
  }

  getPlaceID(index) {
    this.globalservice.getDetails({placeId: this.hospitals[index][3]},(result,status)=>{
      console.log(index);
      console.log(result);
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        this.navCtrl.push(HospitalinfoPage,{ data : [result.name,result.formatted_address,result.formatted_phone_number,result.website,result.opening_hours,result.rating,result.photos[0]]});
      }
      else{
        this.navCtrl.push(HospitalinfoPage,{ data : ['NA','NA','NA','NA','NA','NA','NA']});
      }
  })
  }
}
