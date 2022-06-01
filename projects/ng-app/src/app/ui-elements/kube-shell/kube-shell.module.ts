import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KubeShellComponent } from './kube-shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { KubeShellSidenavModule } from './kube-shell-sidenav/kube-shell-sidenav.module';
import { KubeShellHeaderModule } from './kube-shell-header/kube-shell-header.module';

@NgModule({
  declarations: [KubeShellComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    KubeShellSidenavModule,
    KubeShellHeaderModule,
  ],
  exports: [KubeShellComponent],
})
export class KubeShellModule {}
