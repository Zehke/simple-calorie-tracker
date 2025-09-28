import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage'; // <-- named import, wichtig!

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { mealsReducer } from './state/meals.reducer';
import { mealsCollectionReducer } from './state/meals-collection.reducer';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['meals', 'mealsCollection'], // Slice-Keys exakt so
    rehydrate: true,
  })(reducer);
}

const metaReducers: MetaReducer[] = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(
      { meals: mealsReducer, mealsCollection: mealsCollectionReducer },
      { metaReducers } 
    ),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}