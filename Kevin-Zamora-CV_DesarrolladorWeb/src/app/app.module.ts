import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnotherInformationModule } from './cv-resume/another-information/another-information.module';
import { EducationalExperienciesModule } from './cv-resume/educational-experiencies/educational-experiencies.module';
import { MainComponentsModule } from './cv-resume/main-components/main-components.module';
import { PersonalDataModule } from './cv-resume/personal-data/personal-data.module';
import { VolunteeringAndSocialActionsModule } from './cv-resume/volunteering-and-social-actions/volunteering-and-social-actions.module';
import { WorkingExperienciesModule } from './cv-resume/working-experiencies/working-experiencies.module';
import { StorePageModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import {ScreenTrackingService, UserTrackingService}
from '@angular/fire/analytics';
import {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
// import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from '@angular/fire/app';
import * as firebase from 'firebase/analytics';
firebase.initializeAnalytics;
firebase.getAnalytics;


const firebaseConfig = {
  apiKey: "AIzaSyAnxNNk0xfRp7AS8vr4KaM4gRXLKIYi0NY",
  authDomain: "kevin-zamora-cv--web-dev-bcfc2.firebaseapp.com",
  projectId: "kevin-zamora-cv--web-dev-bcfc2",
  storageBucket: "kevin-zamora-cv--web-dev-bcfc2.appspot.com",
  messagingSenderId: "174338969814",
  appId: "1:174338969814:web:da4505e9c527619b293977"
}

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AnotherInformationModule,
    EducationalExperienciesModule,
    MainComponentsModule,
    PersonalDataModule,
    VolunteeringAndSocialActionsModule,
    WorkingExperienciesModule,
    StorePageModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
  ],
  providers: [ ScreenTrackingService, UserTrackingService, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
