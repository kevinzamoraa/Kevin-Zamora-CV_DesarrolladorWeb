import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import { PersonalDataModule } from '../../personal-data/personal-data.module';
import { MainComponentsModule } from "../../main-components/main-components.module";

@NgModule({
    declarations: [AboutMePage],
    imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutMePageRoutingModule,
    PersonalDataModule,
    MainComponentsModule
]
})
export class AboutMePageModule {}
