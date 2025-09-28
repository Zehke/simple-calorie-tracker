import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealModalComponent } from './meal-modal.component';

describe('MealModalComponent', () => {
  let component: MealModalComponent;
  let fixture: ComponentFixture<MealModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [IonicModule.forRoot(), MealModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
