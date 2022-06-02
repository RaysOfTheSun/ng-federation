import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FedSearchbarModule, KubePlaceholderHeaderModule } from 'ng-material';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, FedSearchbarModule, KubePlaceholderHeaderModule],
  exports: [LandingComponent],
})
export class LandingModule {}
