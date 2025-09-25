import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './meals-collection.page';
import { HomePageRoutingModule } from './meals-collection-routing.module';
import { MealComponentModule } from '../meal/meal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
