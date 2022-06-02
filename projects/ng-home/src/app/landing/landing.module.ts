import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FedSearchbarModule, KubePlaceholderHeaderModule } from 'ng-material';
import { L10nTranslationModule } from 'angular-l10n';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FedSearchbarModule,
    KubePlaceholderHeaderModule,
    L10nTranslationModule,
  ],
  exports: [LandingComponent],
})
export class LandingModule {}
