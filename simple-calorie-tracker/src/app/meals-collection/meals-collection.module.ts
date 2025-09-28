import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MealsCollection } from './meals-collection.page';
import { MealsCollectionRoutingModule } from './meals-collection-routing.module';
import { MealComponentModule } from '../meal/meal.module';
import { MealModalComponent } from '../meal-modal/meal-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealComponentModule,
    MealModalComponent,
    MealsCollectionRoutingModule
  ],
  declarations: [MealsCollection]
})
export class MealsCollectionModule {}
