import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubeShellComponent } from './kube-shell.component';

describe('KubeShellComponent', () => {
  let component: KubeShellComponent;
  let fixture: ComponentFixture<KubeShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubeShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubeShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
