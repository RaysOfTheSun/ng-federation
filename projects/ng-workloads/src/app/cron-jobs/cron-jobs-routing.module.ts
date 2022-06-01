import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronJobsComponent } from './cron-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: CronJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronJobsRoutingModule {}
