import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fed-placeholder-header',
  templateUrl: './placeholder-header.component.html',
  styleUrls: ['./placeholder-header.component.scss'],
})
export class PlaceholderHeaderComponent implements OnInit {
  @Input()
  heading: string;

  @Input()
  subheading: string;

  constructor() {}

  ngOnInit(): void {}
}
