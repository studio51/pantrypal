import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { PantryPal } from './app.component';

import { AppMenuComponent } from '../components/app-menu/app-menu';

import { PantryPage } from '../pages/pantry/pantry';
import { RecipesPage } from '../pages/recipes/recipes';

@NgModule({
  declarations: [
    PantryPal,
    AppMenuComponent,
    PantryPage, RecipesPage
  ],

  imports: [
    IonicModule.forRoot(PantryPal)
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    PantryPal,
    AppMenuComponent,
    PantryPage, RecipesPage
  ],

  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class PantryPalModule {}
