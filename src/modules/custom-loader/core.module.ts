import { MatProgressBarModule } from '@angular/material';
import { HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderService } from './service/loader.service';
import { CustomHttpService } from './service/custom-http.service';

import { LoaderComponent } from './loader/loader.component';
import { httpServiceFactory } from './http-service.factory';

@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [
        LoaderComponent
    ],
    providers: [
        LoaderService,
        {
            provide: CustomHttpService,
            useFactory: httpServiceFactory,
            deps: [HttpHandler, LoaderService]
        }
    ]
})

export class CoreModule { }