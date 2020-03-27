import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';


import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
    // observable throw and error handling 
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise'; // using promise



// map does not exist => npm install rxjs-compat to fix it

const PASSENGER_API: string = '/api/passengers';

@Injectable()


export class PassengerDashboardService {
   
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
          //  console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("../../assets/db.json");
    }

    getPassengers():Observable<Passenger[]> {
       return this.http
       .get(PASSENGER_API)
       .map((response: any) => response.json())
       .catch((error: any) => Observable.throw(error.json())); // just add this 
    }

    getPassengersUsePromise(): Promise<Passenger[]> {
        return this.http
        .get(PASSENGER_API)
        .toPromise()
        .then((response: any) => response.json());
     }

    udatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger)
        .map(( response: any) => response.json())
        .catch((error: any) => Observable.throw(error.json()));
    }
    udatePassengerUsePromise(passenger: Passenger): Promise<Passenger> {
        return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger)
        .toPromise()
        .then(( response: any) => response.json());
    }
    /** header and options
     *   udatePassenger(passenger: Passenger): Observable<Passenger> {
        let headers = new HttpHeaders({
            'content-type': 'application/json'
        });
        let options = new HttpHeaderResponse({
            headers: headers
        });
        return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
        .map(( response: any) => response.json());
    }
     */
    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .map(( response: any) => response.json());
    //  .catch((error: any) => Observable.throw(error.json())); it's work simply like this 
    }
    
    removePassengerUsePromise(passenger: Passenger): Promise<Passenger> {
        return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .toPromise()
        .then(( response: any) => response.json());
    }
}