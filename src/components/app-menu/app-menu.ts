import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { PantryPage } from '../../pages/pantry/pantry';
import { RecipesPage } from '../../pages/recipes/recipes';

@Component({
  selector: 'app-menu',
  templateUrl: 'app-menu.html'
})

export class AppMenuComponent {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController

  ) { }

  goToPantry() {
    this.navCtrl.push(PantryPage)
  }

  addNewItemToThePantry() {
    let modal = this.modalCtrl.create({
      // AddGroceryPage
    });

    return modal.present();
  }

  goToRecipes() {
    this.navCtrl.push(RecipesPage)
  }
}
