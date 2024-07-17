import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsPageRoutingModule } from './skills-routing.module';

import { SkillsPage } from './skills.page';
import { MainComponentsModule } from "../../main-components/main-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsPageRoutingModule,
    MainComponentsModule
],
  declarations: [SkillsPage]
})
export class SkillsPageModule {}
