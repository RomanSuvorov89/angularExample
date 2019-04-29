import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportService } from './transport.service';
import { LoginRequest } from 'src/models/Requests';
import { User } from 'src/models/Responses';
import { DataToken } from 'src/models/data.token';


@Injectable({ providedIn: 'root' })
export class IntegrateService {

    constructor(private transportService: TransportService) { }

    public login(login: string, password: string) : Observable<any> {
        let req = new LoginRequest;
        req.Login = login;
        req.Password = password;
        req.DeviceName = this.getBrowser();

        return this.transportService.post<LoginRequest>('login', req);
    }

    public getTokenByUser() : Observable<any> {
        return this.transportService.post<LoginRequest>('getUserTokens', null);
    }

    public deleteTokenByUser()  : Observable<any> {
        return this.transportService.post<any>('deleteTokensByUser', null);
    }

    public getUserData() : Observable<any> {
        return this.transportService.post<any>('getUserData', null);
    }

    public upsertData(tokenData: DataToken) : Observable<any> {
        return this.transportService.post<DataToken>('upsertData', tokenData);
    }

    public updateTokenForData(tokenData: DataToken) : Observable<any> {
        return this.transportService.post<DataToken>('updateTokenForData', tokenData);
    }

    public getUserOptions()  : Observable<any> {
        return this.transportService.post<any>('getUserOptions', null);
    }

    public updateUserOptions(userRequest: User)  : Observable<any> {
        return this.transportService.post<User>('updateUserOptions', userRequest);
    }

    private getBrowser() : string {
        var sBrowser, sUsrAg = navigator.userAgent;

        // The order matters here, and this may report false positives for unlisted browsers.

        if (sUsrAg.indexOf("Firefox") > -1) {
            sBrowser = "Mozilla Firefox";
            // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            sBrowser = "Opera";
            //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        } else if (sUsrAg.indexOf("Trident") > -1) {
            sBrowser = "Microsoft Internet Explorer";
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        } else if (sUsrAg.indexOf("Edge") > -1) {
            sBrowser = "Microsoft Edge";
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        } else if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome";
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        } else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        } else {
            sBrowser = "unknown browser";
        }

        return sBrowser;
    }
}