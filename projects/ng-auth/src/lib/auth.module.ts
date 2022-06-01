import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersModule } from './providers/providers.module';

@NgModule({
  imports: [CommonModule, ProvidersModule],
})
export class AuthModule {}
