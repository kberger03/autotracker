//users.service.ts
//The service to manipulate users in the database
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    url: string = '/api/v1/users'; //so only one change needs to be made if modified

    constructor(private http: Http){
    }

//requests all the users in the database
    getUsers(){
        return this.http.get(this.url).map(res => res.json());
    }

//requests a singular user in the database 
    getUser(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

//adds a user to the database 
    addUser(value: any) { 
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());   
    }

//requests the id for a singular user in the database 
    getId(username: any){
        return this.http.get("api/v1/" + username).map(res => res.json());
    }

}