import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IntegrateService } from './integrate.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentTokenSubject: BehaviorSubject<string>;
    public currentToken: Observable<string>;

    constructor(private integrateService: IntegrateService) {
        this.currentTokenSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUserToken')));
        this.currentToken = this.currentTokenSubject.asObservable();
    }

    public get currentTokenValue(): string {
        return this.currentTokenSubject.value;
    }

    public login(login: string, password: string) : Observable<any> {
        return this.integrateService.login(login, password);
    }

    public logout() {
        localStorage.removeItem('currentUserToken');
        this.currentTokenSubject.next(null);
    }
}