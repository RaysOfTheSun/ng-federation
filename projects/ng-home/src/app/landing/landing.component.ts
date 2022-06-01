import { Component, OnInit } from '@angular/core';
import { AuthService } from 'ng-auth';

@Component({
  selector: 'fed-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('[HOME]', this.authService.currUser)
  }
}
