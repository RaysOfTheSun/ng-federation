import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PlaceholderHeaderComponent } from 'ng-material';
import { AuthService } from 'ng-auth';

@Component({
  selector: 'fed-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('dynamicPlaceholder', { read: ViewContainerRef, static: true })
  public dynamicPlaceholder: ViewContainerRef;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const dynamicPlaceholder = this.dynamicPlaceholder.createComponent(
      PlaceholderHeaderComponent
    );

    dynamicPlaceholder.instance.heading = 'Landing Page Placeholder'
  }
}
