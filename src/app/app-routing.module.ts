import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./pages/login/login.component').then((a) => a.LoginComponent);
    },
  },
  {
    path: 'browse',
    loadComponent: () => {
      return import('./pages/browse/browse.component').then((a) => a.BrowseComponent);
    }
      
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
