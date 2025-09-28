import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Meal } from './meal.model'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent {
  private platform = inject(Platform);
  @Input() meal?: Meal;
  @Output() delete = new EventEmitter<number>();

  isIos() {
    return this.platform.is('ios')
  }
  isAndroid() {
    return this.platform.is('android')
  }

  onClick(id: number, event: Event) {
    event.stopPropagation();
    this.delete.emit(id);
  }


}