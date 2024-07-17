import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvNavbarComponent } from './cv-navbar/cv-navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CvSidenavComponent } from './cv-sidenav/cv-sidenav.component';
import { CvFooterComponent } from './cv-footer/cv-footer.component';


@NgModule({
  declarations: [
    CvNavbarComponent,
    CvSidenavComponent,
    CvFooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    CvNavbarComponent,
    CvFooterComponent
  ]
})
export class MainComponentsModule { }
