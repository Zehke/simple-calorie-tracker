import { createReducer, on } from '@ngrx/store';
import { MealsActions } from './meals.actions';

export const initialState: ReadonlyArray<number> = [];

export const mealsCollectionReducer = createReducer(
  initialState,
  on(MealsActions.addMeal, (s, { meal }) =>
    s.includes(meal.id) ? s : [...s, meal.id]
  ),
  on(MealsActions.deleteMeal, (s, { mealId }) => s.filter(id => id !== mealId)),
);