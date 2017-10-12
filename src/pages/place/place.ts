import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;
  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    public navParams: NavParams
  ) {
    this.lat = this.navParams.data.lat;
    this.lng = this.navParams.data.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }
}
