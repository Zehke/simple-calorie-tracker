import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMealCollection, selectMeals } from './state/meals.selectors';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor( private store: Store) {}
  meals$ = this.store.select(selectMeals);
  mealsCollection$ = this.store.select(selectMealCollection)

  ngOnInit(): void { }
}
