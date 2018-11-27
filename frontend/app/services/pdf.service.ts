// pdf.services.ts
//The service to get a pdf file
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PDFService {

    url: string = '/api/v1/export'; //so only one change needs to be made if modified

    constructor(private http: Http){
        
    }

//Requests a PDF
    getPDF(value: any){
        console.log("hear me ROAR");
        console.log(value);
        let valueString = JSON.stringify(value);
        console.log(valueString);
        console.log("roar");
        console.log(this.url);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.http.post(this.url, valueString, options).map(res => res.json()); 
    }

}