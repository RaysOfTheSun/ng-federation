import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KubeShellSidenavItemComponent } from './components/kube-shell-sidenav-item/kube-shell-sidenav-item.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [KubeShellSidenavItemComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [KubeShellSidenavItemComponent],
})
export class KubeShellSidenavModule {}
