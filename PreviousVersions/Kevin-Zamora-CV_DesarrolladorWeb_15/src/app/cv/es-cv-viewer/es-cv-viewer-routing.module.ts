import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsCvViewerPage } from './es-cv-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: EsCvViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsCvViewerPageRoutingModule {}
