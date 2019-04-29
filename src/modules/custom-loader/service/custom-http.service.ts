import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class CustomHttpService extends HttpClient {

    constructor(handler: HttpHandler, private loaderService: LoaderService) {
        super(handler);
    }

    public post<T>(url: string, body: any, options?: any): Observable<any> {
        const self = this;
        self.showLoader();

        return super.post<T>(url, body, options).pipe(finalize(() => self.hideLoader()));
    }

    private showLoader(): void {
        const self = this;
        self.loaderService.show();
    }

    private hideLoader(): void {
        const self = this;
        self.loaderService.hide();
    }
}