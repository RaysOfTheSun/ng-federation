import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  public readonly navItems = [
    {
      title: 'Home',
      path: ['/', 'landing'],
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
