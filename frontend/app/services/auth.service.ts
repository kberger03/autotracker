// auth.services.ts
//The service for authenticating the username and password for logging in 
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    url: string = '/api/v1/auth'; //so only one change needs to be made if modified

    constructor(private http: Http){
        
    }

    authenticate(value: any){ 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        console.log(valueString); //for troubleshooting purposes
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

}