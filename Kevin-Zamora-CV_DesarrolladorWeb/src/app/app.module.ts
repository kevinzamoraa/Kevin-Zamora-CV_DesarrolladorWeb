import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnotherInformationModule } from './another-information/another-information.module';
import { EducationalExperienciesModule } from './educational-experiencies/educational-experiencies.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { VolunteeringAndSocialActionsModule } from './volunteering-and-social-actions/volunteering-and-social-actions.module';
import { WorkingExperienciesModule } from './working-experiencies/working-experiencies.module';
import { StorePageModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


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
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
