import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { MealComponentModule } from '../meal/meal.module'
import { MealsCollection } from './meals-collection.page';
import { mealsReducer } from '../state/meals.reducer';
import { mealsCollectionReducer } from '../state/meals-collection.reducer';

describe('MealsCollection', () => {
  let component: MealsCollection;
  let fixture: ComponentFixture<MealsCollection>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MealsCollection],
      imports: [IonicModule.forRoot(), MealComponentModule, RouterModule.forRoot([]), StoreModule.forRoot({ meals: mealsReducer, mealsCollection: mealsCollectionReducer }),],
    }).compileComponents();

    fixture = TestBed.createComponent(MealsCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
