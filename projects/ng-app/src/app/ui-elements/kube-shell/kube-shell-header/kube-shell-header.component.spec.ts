import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeShellHeaderComponent } from './kube-shell-header.component';

describe('KubeShellHeaderComponent', () => {
  let component: KubeShellHeaderComponent;
  let fixture: ComponentFixture<KubeShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubeShellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
