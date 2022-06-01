import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FedSearchbarModule } from 'ng-material';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, FedSearchbarModule],
  exports: [LandingComponent],
})
export class LandingModule {}
