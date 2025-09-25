import { createReducer, on } from '@ngrx/store';
import { MealsActions } from './meals.actions';

export const initialState: ReadonlyArray<number> = [];

export const mealsCollectionReducer = createReducer(
  initialState,
  on(MealsActions.deleteMeal, (state, { mealId }) =>
    state.filter((id) => id !== mealId)
  ),
  on(MealsActions.addMeal, (state, { mealId }) => {
    if (state.indexOf(mealId) > -1) return state;

    return [...state, mealId];
  })
);