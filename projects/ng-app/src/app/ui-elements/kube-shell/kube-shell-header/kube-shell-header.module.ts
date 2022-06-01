import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KubeShellHeaderComponent } from './kube-shell-header.component';
import { FedSearchbarModule } from 'ng-material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [KubeShellHeaderComponent],
  imports: [CommonModule, FedSearchbarModule, MatIconModule, MatButtonModule],
  exports: [KubeShellHeaderComponent],
})
export class KubeShellHeaderModule {}
