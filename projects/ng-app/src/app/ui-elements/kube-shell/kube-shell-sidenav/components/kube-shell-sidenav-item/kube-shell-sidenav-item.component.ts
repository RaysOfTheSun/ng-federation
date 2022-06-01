import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fed-kube-shell-sidenav-item',
  templateUrl: './kube-shell-sidenav-item.component.html',
  styleUrls: ['./kube-shell-sidenav-item.component.scss'],
})
export class KubeShellSidenavItemComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  link: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}