import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeShellSidenavItemComponent } from './kube-shell-sidenav-item.component';

describe('KubeShellSidenavItemComponent', () => {
  let component: KubeShellSidenavItemComponent;
  let fixture: ComponentFixture<KubeShellSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubeShellSidenavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeShellSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
