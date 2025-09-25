import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Meal } from '../meal/meal.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Meal>>('meals');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<number>
>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (meals, collection) => {
    return collection.map((id) => meals.find((meal) => meal.id === id)!);
  }
);