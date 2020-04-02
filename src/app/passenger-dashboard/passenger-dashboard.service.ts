import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './models/passenger.interface';
import {filter, flatMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
    // observable throw and error handling 
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise'; // using promise


// map does not exist => npm install rxjs-compat to fix it



@Injectable()


export class PassengerDashboardService {
     PASSENGER_API: string = 'http://localhost:3000/passengers';
    constructor(private http: HttpClient) {
      /*  this.getJSON().subscribe(data => {
          //  console.log(data);
        });*/
        
    }
    private listOfPassengers : Passenger[] = []
    /*public getJSON(): Observable<any> {
        return this.http.get("../assets/db.json");
    }*/

    getPassengers():Observable<Passenger[]> {
       return this.http
       .get<Passenger[]>('http://localhost:3000/passengers');
       // .map((response: any) => response.passengers);
       // .catch((error: any) => Observable.throw(error.json())); // just add this 
    }

    getPassenger1(id: number):Observable<Passenger> {
        return this.http
        .get(`${this.PASSENGER_API}/${id}`)
        .map((response: any) =>  response.json());
       // .catch((error: any) => Observable.throw(error.json())); // just add this 
     }
     getPassenger(id: any): Observable<Passenger> {
        return this.getPassengers()
          .pipe(
            flatMap(passengers => passengers),
            filter(passenger => String(passenger.id) === id));
      }
    getPassengersUsePromise(): Promise<Passenger[]> {
        return this.http
        .get(this.PASSENGER_API)
        .toPromise()
        .then((response: any) => response.json());
     }

    udatePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
        .put(`${this.PASSENGER_API}/${passenger.id}`, passenger)
        .map(( response: any) => response.json())
        .catch((error: any) => Observable.throw(error.json()));
    }
    editPassenger(passenger: Passenger): Observable<Passenger[]> {
        return this.http.put<Passenger[]>(this.PASSENGER_API, passenger);
      }
    udatePassengerUsePromise(passenger: Passenger): Promise<Passenger> {
        return this.http
        .put(`${this.PASSENGER_API}/${passenger.id}`, passenger)
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
        .delete(`${this.PASSENGER_API}/${passenger.id}`)
        .map(( response: any) => response.json());
    //  .catch((error: any) => Observable.throw(error.json())); it's work simply like this 
    }
    
    removePassengerUsePromise(passenger: Passenger): Promise<Passenger> {
        return this.http
        .delete(`${this.PASSENGER_API}/${passenger.id}`)
        .toPromise()
        .then(( response: any) => response.json());
    }
}