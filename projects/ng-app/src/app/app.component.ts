import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng-auth';
import { KubeShellSideNavItem } from './ui-elements/kube-shell/providers/models/kube-shell-sidenav-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  public readonly navItems: KubeShellSideNavItem[] = [
    {
      label: 'Overview',
      path: ['/', 'landing'],
    },
    {
      label: 'Workloads',
      children: [
        {
          label: 'Cron Jobs',
          path: ['/', 'workloads', 'cron-jobs'],
        },
      ],
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.setUser({
      name: 'Set User at Shell',
    });

    console.log('[SHELL]', this.authService.currUser);
  }
}
