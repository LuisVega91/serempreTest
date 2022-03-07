import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesWrapperComponent } from './favorites-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritesWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../favorites/favorites.module').then(m => m.FavoritesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesWrapperRoutingModule { }
