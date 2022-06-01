import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cron-jobs',
    loadChildren: () =>
      import('./cron-jobs/cron-jobs.module').then((m) => m.CronJobsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'cron-jobs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
