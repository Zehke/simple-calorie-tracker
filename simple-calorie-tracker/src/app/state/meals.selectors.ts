import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Meal } from '../meal/meal.model';

export const selectMeals = createFeatureSelector<ReadonlyArray<Meal>>('meals');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<number>>('mealsCollection');

export const selectMealCollection = createSelector(
  selectMeals,
  selectCollectionState,
  (meals, ids) => ids.map(id => meals.find(m => m.id === id)!)
);