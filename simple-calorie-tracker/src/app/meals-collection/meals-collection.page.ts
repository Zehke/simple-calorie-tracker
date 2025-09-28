import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { Meal } from '../meal/meal.model'
import { MealsActions } from '../state/meals.actions';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectMealCollection, selectMeals } from '../state/meals.selectors';

@Component({
  selector: 'app-meals-collection',
  templateUrl: 'meals-collection.page.html',
  styleUrls: ['meals-collection.page.scss'],
  standalone: false,
})
export class MealsCollection {

  meals$: Observable<Meal[]> = this.store.select(selectMealCollection);
  mealsCollection$: Observable<Meal[]> = this.store.select(selectMealCollection)

  nextId$ = this.store.select(selectMeals).pipe(
    map(meals => meals.length ? Math.max(...meals.map(m => m.id)) + 1 : 1)
  );

  showModal: boolean = false;
  lastIdOfMeal: number = 0;

  constructor(private readonly store: Store) { }


  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  openAdd(): void {
      this.showModal = true;
  }

  onAdd(mealObj: Meal): void {
    this.store.dispatch(MealsActions.addMeal({ meal: mealObj }));
    this.showModal = false;
  }

  onDelete(mealId: number): void {
    this.showModal = false;
    this.store.dispatch(MealsActions.deleteMeal({ mealId: mealId }));
  }

  onDiscard(): void {
    this.showModal = false;
  }
}

