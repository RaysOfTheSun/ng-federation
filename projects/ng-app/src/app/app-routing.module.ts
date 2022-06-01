import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        exposedModule: './LandingModule',
        remoteEntry: 'http://localhost:4300/remote-ng-home.js',
      }).then((m) => m.LandingModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
