import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnCvViewerPageRoutingModule } from './en-cv-viewer-routing.module';

import { EnCvViewerPage } from './en-cv-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnCvViewerPageRoutingModule
  ],
  declarations: [EnCvViewerPage]
})
export class EnCvViewerPageModule {}
