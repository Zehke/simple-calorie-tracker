import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';


import { DataService } from '../services/data.service';
import { Meal } from '../meal/meal.model'

@Component({
  selector: 'app-meals-collection',
  templateUrl: 'meals-collection.page.html',
  styleUrls: ['meals-collection.page.scss'],
  standalone: false,
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMeals(): Meal[] {
    return this.data.getMeals();
  }
}
