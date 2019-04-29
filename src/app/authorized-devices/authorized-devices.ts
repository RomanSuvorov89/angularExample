import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../services/integrate.service';
import { UserTokenResponse, UserTokenData } from 'src/models/Responses';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Observable, Subject, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'authorized-devices',
  templateUrl: './authorized-devices.html'
})
export class AuthDevices implements OnInit {
  tokensDataArray : UserTokenData[] = [];
  displayedColumns = ['deviceName', 'lastVisit'];

  constructor(private integrateService: IntegrateService,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.integrateService.getTokenByUser().subscribe(response => {
      let r = response['resultOperation'] as UserTokenResponse;
      this.tokensDataArray = r.userTokens;
    })
  }

  deleteTokens() {

    this.integrateService.deleteTokenByUser().subscribe();

    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}