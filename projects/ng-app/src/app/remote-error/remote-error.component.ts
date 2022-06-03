import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionVar } from '../core/providers/constants/session-var.enum';

@Component({
  selector: 'fed-remote-error',
  templateUrl: './remote-error.component.html',
  styleUrls: ['./remote-error.component.scss'],
})
export class RemoteErrorComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public handleRefresh(): void {
    this.router.navigate(['/', 'landing']);
  }
}
