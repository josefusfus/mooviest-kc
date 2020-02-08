import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieTabPage } from './movie-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MovieTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieTabPageRoutingModule {}
