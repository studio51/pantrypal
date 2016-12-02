import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { PantryPage } from '../pages/pantry/pantry';

@Component({
  templateUrl: 'app.html'
})

export class PantryPal {
  rootPage = PantryPage;

  constructor(platform: Platform) {

    platform.ready().then((source) => {

      if (source == 'cordova') {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }
}
