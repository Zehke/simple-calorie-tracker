Simple Calorie Tracker (Ionic + Angular + NgRx)

A tiny crd app to add and delete personal meals, built with Ionic/Angular and NgRx (Redux pattern). The focus is a clean state model, proper actions/reducers/selectors, and optional state persistence to Local Storage.

Demo (what it does)
- Add a meal (title + timestamp)
- Delete a meal
- State is stored in NgRx
- (Bonus) State persists via Local Storage

Tech Stack
- Angular 20.3
- Ionic Angular
- NgRx Store
- ngrx-store-localstorage

https://github.com/user-attachments/assets/31f49c05-bc11-4f29-8c6e-4e911706c01a

### Get started: 
- 0) download repo
- 1) Install deps
npm install

- 2) Run dev server
ionic serve

- 3) Run tests (Jasmine/Karma)
ng test

ProjectStructure:
```
src/
  app/
    state/
      meals.actions.ts
      meals.reducer.ts
      meals-collection.reducer.ts
      meals.selectors.ts
    meals-collection/
      meals-collection-routing.module.ts
      meals-collection.page.ts
      meals-collection.page.html
    meal/
      meal.component.ts
      meal.component.html
      meal.model.ts
    meal-modal/
      meal-modal.component.ts
      meal-modal.component.html
    app.module.ts
    app-routing.module.ts
```
