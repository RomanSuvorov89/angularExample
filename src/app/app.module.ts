import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import { MatInputModule, MatPaginatorModule, MatSortModule } from '@angular/material';

import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from '../modules/custom-loader/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainForm } from './app-main-form/app-main-form';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';
import { CustomRouterModule } from './app.routing';
import { IntegrateService } from './services/integrate.service';
import { TransportService } from './services/transport.service';
import { AuthDevices } from './authorized-devices/authorized-devices';
import { UserProfile } from './user-profile/user.profile.component';
import { Data } from './app-data/app-data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainForm,
    AuthDevices,
    UserProfile,
    Data
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomRouterModule,
    BrowserAnimationsModule,
    CoreModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    TransportService
  ],
  entryComponents: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
