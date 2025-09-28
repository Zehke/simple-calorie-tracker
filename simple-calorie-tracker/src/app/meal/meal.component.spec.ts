import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { MealComponent } from './meal.component';
import { mealsReducer } from '../state/meals.reducer';
import { mealsCollectionReducer } from '../state/meals-collection.reducer';

describe('MealsComponent', () => {
  let component: MealComponent;
  let fixture: ComponentFixture<MealComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MealComponent ],
      imports: [IonicModule.forRoot(), StoreModule.forRoot({ meals: mealsReducer, mealsCollection: mealsCollectionReducer })]
    }).compileComponents();

    fixture = TestBed.createComponent(MealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
