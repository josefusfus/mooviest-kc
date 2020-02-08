import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        {
              path: 'movie-tab',
              children: [
                  {
                    path: '',
                    loadChildren: () => import('../movie-tab/movie-tab.module').then( m => m.MovieTabPageModule)
                  }
                ]
        },
        {
              path: 'about-tab',
              children: [
                  {
                    path: '',
                    loadChildren: () => import('../about-tab/about-tab.module').then( m => m.AboutTabPageModule)
                  }
                ]
        }
    ]
  },
  {
      path: '',
      redirectTo: '/tabs/movie-tab',
      pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
