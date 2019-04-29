import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CustomHttpService } from 'src/modules/custom-loader/service/custom-http.service';


@Injectable()
export class TransportService {
    // public apiUrl = 'https://commi.ddns.net:44321/';
     public apiUrl = 'https://localhost:44321/';

    constructor(private http: CustomHttpService, private toastr: ToastrService) { }

    public post<T>(url: string, request: any, isUseCredentials: boolean = false) : Observable<T>  {
        return this.http.post<T>(this.apiUrl + url, request, { withCredentials : isUseCredentials}).pipe(map(response => 
        {
            if (response['isSuccess']) {
                this.toastr.success(response['message'], 'Успешно', {positionClass: 'toast-bottom-right'});
                return response;
            } else {
                this.toastr.error(response['message'], 'Ошибка', {positionClass: 'toast-bottom-right'});
                return of(null);                
            }
        }), 
        catchError (error => {
            this.toastr.error('Сервер не вернул ответ', 'Ошибка', {positionClass: 'toast-bottom-right'}); 
            return of(null);
        }));
    }
}