import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MealsCollectionRoutingModule } from '../meals-collection/meals-collection-routing.module';
import { MealComponentModule } from '../meal/meal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealComponentModule,
    MealsCollectionRoutingModule
  ],
  declarations: []
})
export class MealModalModule {}