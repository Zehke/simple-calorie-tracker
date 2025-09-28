import { createReducer, on } from '@ngrx/store';
import { MealsActions, MealsApiActions } from './meals.actions';
import { Meal } from '../meal/meal.model';

export const initialState: ReadonlyArray<Meal> = [];

export const mealsReducer = createReducer(
  initialState,
  on(MealsApiActions.retrievedMealList, (_state, { meals }) => meals),
  on(MealsActions.addMeal, (state, { meal }) => [...state, meal]),
  on(MealsActions.deleteMeal, (state, { mealId }) => state.filter(m => m.id !== mealId))
);