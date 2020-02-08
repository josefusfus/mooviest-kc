import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieTabPageRoutingModule } from './movie-tab-routing.module';

import { MovieTabPage } from './movie-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieTabPageRoutingModule
  ],
  declarations: [MovieTabPage]
})
export class MovieTabPageModule {}
