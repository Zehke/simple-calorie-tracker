import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { Meal } from '../meal/meal.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meal-modal',
  templateUrl: './meal-modal.component.html',
  styleUrls: ['./meal-modal.component.scss'],
  imports: [IonicModule, FormsModule],
})
export class MealModalComponent implements OnInit {
  @Input() lastIdOfMeals: number = 0;
  @Input() isOpen: boolean = false;
  @Output() add = new EventEmitter<Meal>();
  @Output() discard = new EventEmitter<void>();
  mealTitle: string = "";
  meal: Meal | null = null;

  constructor() { }

  ngOnInit() { 
  }

  onAddClick() {
    this.meal = {
      id: this.lastIdOfMeals,
      title: this.mealTitle.trim(),
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }
    if(!this.meal) return
    this.add.emit(this.meal)
  }

  discardChanges() {
    this.mealTitle = '';
    this.discard.emit();
  }

}
