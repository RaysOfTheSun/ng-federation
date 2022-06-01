import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from 'ng-auth';
import { SearchbarComponent } from 'ng-material';

@Component({
  selector: 'fed-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('[HOME]', this.authService.currUser);
  }
}
