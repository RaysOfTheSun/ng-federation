import { Component, OnInit } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { AuthService } from 'ng-auth';
import { filter } from 'rxjs/operators';
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.setUser({
      name: 'Set User at Shell',
    });

    console.log('[SHELL]', this.authService.currUser);

    this.monitorRoutingErrors();
  }

  private monitorRoutingErrors(): void {
    this.router.events
      .pipe(filter((routerEv) => routerEv instanceof NavigationError))
      .subscribe((navigationError: NavigationError) => {
        console.log('[ROUTING] failed to route to', navigationError.url);
        this.router.navigate(['/', 'error']);
      });
  }
}
