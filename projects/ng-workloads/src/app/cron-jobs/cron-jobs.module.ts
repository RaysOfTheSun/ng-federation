import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronJobsRoutingModule } from './cron-jobs-routing.module';
import { CronJobsComponent } from './cron-jobs.component';


@NgModule({
  declarations: [
    CronJobsComponent
  ],
  imports: [
    CommonModule,
    CronJobsRoutingModule
  ]
})
export class CronJobsModule { }
