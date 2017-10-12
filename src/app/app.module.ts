import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
// import { AgmCoreModule } from 'angular2-google-maps/core';
import { AgmCoreModule } from '@agm/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage } from '../pages/new-place/new-place';
import { PlacePage } from '../pages/place/place';
import { PlacesServive } from '../services/places.service';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__ionic_`myplaces',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCY8YPjB0IuW2Q-2bVd6iNlc-Xy127MHI'
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesServive,
    Geolocation
  ]
})
export class AppModule {}
