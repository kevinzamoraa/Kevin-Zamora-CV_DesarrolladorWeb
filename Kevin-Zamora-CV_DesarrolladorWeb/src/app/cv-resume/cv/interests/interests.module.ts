import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestsPageRoutingModule } from './interests-routing.module';

import { InterestsPage } from './interests.page';
import { MainComponentsModule } from "../../main-components/main-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestsPageRoutingModule,
    MainComponentsModule
],
  declarations: [InterestsPage]
})
export class InterestsPageModule {}
