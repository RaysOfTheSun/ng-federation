import { Injectable } from '@angular/core';
import { KubeUser } from '../../models/user.model';

@Injectable()
export class AuthService {
  public currUser: KubeUser = null;

  constructor() {}

  public setUser(kubeUser: KubeUser): void {
    this.currUser = kubeUser;
  }
}
