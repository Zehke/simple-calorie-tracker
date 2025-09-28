import { createActionGroup, props } from "@ngrx/store";
import { Meal } from "../meal/meal.model";

export const MealsActions = createActionGroup({
  source: 'Meals',
  events: {
    'Add Meal': props<{meal: Meal}>(),
    'Delete Meal': props<{ mealId: number }>(),
  },
});

export const MealsApiActions = createActionGroup({
  source: 'Meals API',
  events: {
    'Retrieved Meal List': props<{ meals: ReadonlyArray<Meal> }>(),
  },
});