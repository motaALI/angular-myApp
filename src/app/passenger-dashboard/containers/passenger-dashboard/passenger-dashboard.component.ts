import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})


export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
    ) {}


  ngOnInit() {
    this.passengerService
       .getPassengers()
       .subscribe((data: Passenger[]) => {
         console.log('Data :'+ data);
         this.passengers =  data;
       });
  }

  handleRemove(event: Passenger) {
    // console.log(event);
    this.passengerService
    .removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      })
    });
    
  }
  handleEdit(event: Passenger) {
    console.log(event);
    this.passengerService
      .udatePassenger(event)
      .subscribe((data:Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleEditUsePromis(event: Passenger) {
    console.log(event);
    this.passengerService
      .udatePassengerUsePromise(event)
      .then((data:Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
    }

    handleView(event: Passenger) {
      this.router.navigate(['/passengers', event.id]);
    }
}
