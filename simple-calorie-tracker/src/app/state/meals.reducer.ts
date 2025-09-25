import { createReducer, on } from '@ngrx/store';

import { MealsApiActions } from './meals.actions';
import { Meal } from '../meal/meal.model';

export const initialState: ReadonlyArray<Meal> = [];

export const mealsReducer = createReducer(
  initialState,
  on(MealsApiActions.retrievedMealList, (_state, { meals }) => meals)
);