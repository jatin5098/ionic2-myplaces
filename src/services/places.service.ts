import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlacesServive {
    private places: any[];
    constructor(
        private storage: Storage
    ) {
        this.places = [];
    }

    addPlace(place: any) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getPlaces() {
        // return this.places.slice();
        return this.storage.get('places').then((record) => {
            this.places = record || [];
            return this.places;
        });
    }
}