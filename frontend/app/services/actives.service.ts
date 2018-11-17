// actives.services.ts
//The service to manipulate actives in the database
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivesService {

    url: string = '/api/v1/actives'; //so only one change needs to be made if modified

    constructor(private http: Http){
        
    }

//Requests all of the actives in the database
    getActives(){
        return this.http.get(this.url).map(res => res.json());
    }

//requests a single active in the database
    getActive(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

//requests the maintenance activities for a single user in the database 
    getUserActives(vuserId: any){
        console.log(vuserId + "in useractivesservices");
        return this.http.get("api/v1/getact/" + vuserId).map(res => res.json());
    }

//adds a active to the database
    addActive(value: any){ 
        console.log(value + "in services");
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

//deletes a active from the database
    deleteActive(value: any){
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header }); 
        return this.http.delete(this.url + "/" + value, options).map(res => res.json());
    }

//updates a active from the database 
    updateActive(value: any){
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.put(this.url + "/" + value.id, valueString, options).map(res => res.json());
    }

}