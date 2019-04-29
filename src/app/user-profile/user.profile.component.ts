import { Component, OnInit } from '@angular/core';
import { IntegrateService } from '../services/integrate.service';
import { User } from 'src/models/Responses';

@Component({
  selector: 'user-profile',
  templateUrl: './user.profile.component.html',
  styleUrls: ['./user.profile.component.scss']
})
export class UserProfile implements OnInit {
  userdata: User;

  constructor(private integrateService: IntegrateService) { }

  ngOnInit() {
    this.integrateService.getUserOptions().subscribe(response => {
      this.userdata = response['resultOperation'] as User;
    })
  }

  onSubmit() {
    this.integrateService.updateUserOptions(this.userdata).subscribe();
  }
}