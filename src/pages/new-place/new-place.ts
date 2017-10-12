import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesServive } from '../../services/places.service';
import { HomePage } from '../home/home'
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  userLoc: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private placesServive: PlacesServive,
    private geolocation: Geolocation
  ) {
    this.userLoc.coords = {
      latitude: 'fetching...',
      longitude: 'fetching...'
    };
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  addNewPlace(place: {title: string}) {
    this.placesServive.addPlace(place);
    this.navCtrl.pop();
  }

  getUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.userLoc = resp;
      console.log(resp.coords.latitude + "  " + resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
