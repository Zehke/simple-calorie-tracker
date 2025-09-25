import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
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
  isIos() {
    return this.platform.is('ios')
  }
  isAndroid() {
    return this.platform.is('android')
  }
}