import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from './store.page';
import { HomePage } from './home/home.page';

import { StoreRoutingModule } from './store-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    StoreRoutingModule
  ],
  declarations: [Store, HomePage, HeaderComponent],
  exports: [Store, HomePage, HeaderComponent]
})
export class StorePageModule {}
