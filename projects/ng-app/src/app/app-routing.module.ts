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
    path: 'workloads',
    children: [
      {
        path: 'cron-jobs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            exposedModule: './CronJobs',
            remoteEntry: 'http://localhost:4500/ng-workloads-remote.js',
          }).then((m) => m.CronJobsModule),
      },
    ],
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./remote-error/remote-error.module').then(
        (m) => m.RemoteErrorModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
