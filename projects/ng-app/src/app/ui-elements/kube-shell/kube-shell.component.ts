import { Component, Input, OnInit } from '@angular/core';
import { KubeShellSideNavItem } from './providers/models/kube-shell-sidenav-item.model';

@Component({
  selector: 'fed-kube-shell',
  templateUrl: './kube-shell.component.html',
  styleUrls: ['./kube-shell.component.scss'],
})
export class KubeShellComponent implements OnInit {
  @Input()
  sideNavItems: KubeShellSideNavItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
