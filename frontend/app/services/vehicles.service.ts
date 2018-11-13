// vehicles.services.ts
//The service to manipulate vehicles in the database
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehiclesService {

    url: string = '/api/v1/vehicles'; //so only one change needs to be made if modified

    constructor(private http: Http){
        
    }

//Requests all of the vehicles in the database
    getVehicles(){
        return this.http.get(this.url).map(res => res.json());
    }

//requests a single vehicle in the database
    getVehicle(id: any){
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }

//requests the vehicles for a single user in the database 
    getUserVehicles(userId: any){
        return this.http.get("api/v1/getveh/" + userId).map(res => res.json());
    }

//adds a vehicle to the database
    addVehicle(value: any){ 
        console.log(value + "in services");
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json());
    }

//deletes a vehicle from the database
    deleteVehicle(value: any){
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header }); 
        return this.http.delete(this.url + "/" + value, options).map(res => res.json());
    }

//updates a vehicle from the database 
    updateVehicle(value: any){
        let valueString = JSON.stringify(value);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.put(this.url + "/" + value.id, valueString, options).map(res => res.json());
    }

}