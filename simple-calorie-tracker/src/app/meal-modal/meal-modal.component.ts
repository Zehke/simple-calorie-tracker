import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-meal-modal',
  templateUrl: './meal-modal.component.html',
  styleUrls: ['./meal-modal.component.scss'],
  imports: [IonicModule],
})
export class MealModalComponent  implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {}

  setOpen(openModal: boolean) {
    this.isOpen = openModal;
  }

}
