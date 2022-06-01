import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fed-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input()
  placeholder = 'Search';

  constructor() {}

  ngOnInit(): void {}
}
