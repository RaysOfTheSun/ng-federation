import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from 'ng-auth';
import { KubeShellModule } from './ui-elements/kube-shell/kube-shell.module';
import { kubeAppInitializerFactory } from './core/kube-app-initailizer.factory';
import {
  L10nIntlModule,
  L10nTranslationModule,
  L10nTranslationService,
} from 'angular-l10n';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    KubeShellModule,
    HttpClientModule,
    L10nTranslationModule.forRoot({
      format: 'language-region',
      providers: [],
      cache: true,
      keySeparator: '.',
      defaultLocale: {
        language: 'en-US',
        currency: 'USD',
      },
      schema: [{ locale: { language: 'en-US' } }],
    }),
    L10nIntlModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: kubeAppInitializerFactory,
      deps: [L10nTranslationService, HttpClient],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
