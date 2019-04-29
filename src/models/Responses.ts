import { DataToken } from './data.token';

export class BaseResponse {
    public isSuccess: boolean;
    public message: string;
    public resultOperation: any;
}

export class UserTokenResponse {
    public userTokens: UserTokenData[];
}

export class UserTokenData {
    public id: string;
    public deviceName: string;
    public lastVisit: string;
}

export class User {
    Login: string;
    Password: string;
    Email: string;
    FirstName: string;
    LastName: string;
    MiddleName: string;
}

export class UserDataResponse {
    public activeTokenData: DataToken[];
    public expiredTokenData: DataToken[];
}