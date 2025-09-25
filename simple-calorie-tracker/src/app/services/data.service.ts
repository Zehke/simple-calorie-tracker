import { Injectable } from '@angular/core';
import { getPregeneratedString, Meal } from '../meal/meal.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public meals: Meal[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.meals.push(this.generateRandomMeal(i));
    }
  }

  public getMeals(): Meal[] {
    return this.meals;
  }

  public getMealById(id: number): Meal {
    return this.meals[id];
  }

  generateRandomMeal(mealId: number): Meal {
    let meal: Meal = {
        id: mealId,
        title: getPregeneratedString(),
        date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() 
    };
    return meal;
}
}
