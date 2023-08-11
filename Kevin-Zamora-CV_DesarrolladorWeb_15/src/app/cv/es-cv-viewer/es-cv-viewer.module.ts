import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsCvViewerPageRoutingModule } from './es-cv-viewer-routing.module';

import { EsCvViewerPage } from './es-cv-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsCvViewerPageRoutingModule
  ],
  declarations: [EsCvViewerPage]
})
export class EsCvViewerPageModule {}
