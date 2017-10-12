import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';
import { PlacesServive } from '../../services/places.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: any[];
  location: any = {};
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private placesServive: PlacesServive
  ) {
    // this.places = this.placesServive.getPlaces();
    this.placesServive.getPlaces()
      .then((places) => {
        this.places = places;
      });

    this.location.lat = 12.8409297;
    this.location.lng = 77.6707812;
  }

  loadNewPage() {
    this.navCtrl.push(NewPlacePage);
  }

  ionViewWillEnter() {
    this.placesServive.getPlaces()
      .then((places) => {
        this.places = places;
      });
  }
  
  onOpenPlace() {
    this.modalCtrl.create(PlacePage, this.location).present();
  }
}
