import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ComponentType } from '@angular/core/src/render3';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-main-form',
  templateUrl: './app-main-form.html'
})
export class MainForm implements OnInit {
  public isAuth: boolean;
  public isUserProfile: boolean;
  public isData: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  async SelectComponent(componentName: string) {
    this.isAuth = false;
    this.isUserProfile = false;
    this.isData = false;

    this['is' + componentName] = true;
  }

  Logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}