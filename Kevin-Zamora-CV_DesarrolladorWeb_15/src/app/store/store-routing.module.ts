import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from './store.page';

const routes: Routes = [
  {
    path: '',
    component: Store,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
