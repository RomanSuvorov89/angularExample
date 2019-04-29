import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../services/integrate.service';
import { DataToken } from 'src/models/data.token';
import { UserDataResponse } from 'src/models/Responses';

@Component({
  selector: 'app-data',
  templateUrl: './app-data.html'
})
export class Data implements OnInit {

  public AllowedData: DataToken[] = [];
  public ExpiredData: DataToken[] = [];
  public isCreateDataToken = false;
  public newDataToken = new DataToken;

  constructor(private integrateService: IntegrateService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.integrateService.getUserData().subscribe(x=> {
      let response = x['resultOperation'] as UserDataResponse;
      console.log(response);
      this.AllowedData = response.activeTokenData;
      this.ExpiredData = response.expiredTokenData;
      console.log(this.AllowedData);
    });
  }

  create(tokenData: DataToken) {
    this.integrateService.upsertData(tokenData).subscribe(x=> {
      this.getUserData();
      this.isCreateDataToken = false;
      this.newDataToken = new DataToken;
    });
  }

  update(tokenData: DataToken) {
    this.integrateService.upsertData(tokenData).subscribe(x=>{
      this.getUserData();
    });
  }

  updateDataToken(tokenData: DataToken) {
    this.integrateService.updateTokenForData(tokenData).subscribe(x=>{
      this.getUserData();
    });
  }
}