import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PersonalDataModule } from "../personal-data/personal-data.module";
import { WorkingExperienciesModule } from "../working-experiencies/working-experiencies.module";
import { EducationalExperienciesModule } from "../educational-experiencies/educational-experiencies.module";
import { MainComponentsModule } from "../main-components/main-components.module";

@NgModule({
    declarations: [Tab1Page],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        Tab1PageRoutingModule,
        PersonalDataModule,
        WorkingExperienciesModule,
        EducationalExperienciesModule,
        MainComponentsModule
    ]
})
export class Tab1PageModule {}
