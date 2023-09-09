import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CvPage } from './cv.page';

import { CvPageRoutingModule } from './cv-routing.module';
import { PersonalDataModule } from "../personal-data/personal-data.module";
import { WorkingExperienciesModule } from "../working-experiencies/working-experiencies.module";
import { EducationalExperienciesModule } from "../educational-experiencies/educational-experiencies.module";
import { MainComponentsModule } from "../main-components/main-components.module";

@NgModule({
    declarations: [CvPage],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CvPageRoutingModule,
        PersonalDataModule,
        WorkingExperienciesModule,
        EducationalExperienciesModule,
        MainComponentsModule
    ],
    exports: [CvPage]
})
export class Tab1PageModule {}
