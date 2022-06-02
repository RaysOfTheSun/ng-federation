import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderHeaderComponent } from './placeholder-header.component';

describe('PlaceholderHeaderComponent', () => {
  let component: PlaceholderHeaderComponent;
  let fixture: ComponentFixture<PlaceholderHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
