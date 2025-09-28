import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsCollection } from './meals-collection.page';

const routes: Routes = [
  {
    path: '',
    component: MealsCollection
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsCollectionRoutingModule {}
