import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteErrorRoutingModule } from './remote-error-routing.module';
import { RemoteErrorComponent } from './remote-error.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RemoteErrorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RemoteErrorRoutingModule,
    MatIconModule,
  ],
})
export class RemoteErrorModule {}
