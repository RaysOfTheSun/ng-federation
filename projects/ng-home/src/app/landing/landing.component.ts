import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PlaceholderHeaderComponent } from 'ng-material';
import { AuthService } from 'ng-auth';
import { L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'fed-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  @ViewChild('dynamicPlaceholder', { read: ViewContainerRef, static: true })
  public dynamicPlaceholder: ViewContainerRef;

  constructor(
    private authService: AuthService,
    private translationService: L10nTranslationService
  ) {}

  ngOnInit(): void {
    console.log('[HOME]', this.authService.currUser);
    const dynamicPlaceholder = this.dynamicPlaceholder.createComponent(
      PlaceholderHeaderComponent
    );

    dynamicPlaceholder.instance.heading = 'Landing Page Placeholder';
    dynamicPlaceholder.instance.subheading = this.translationService.translate(
      'NOTHING_TO_SEE_HERE_LABEL'
    );
  }
}
