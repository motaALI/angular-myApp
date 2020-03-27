import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})


export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];

  constructor(
    private passengerService: PassengerDashboardService
    ) {}


  ngOnInit() {
   /* this.passengerService
       .getPassengers()
       .subscribe((data: Passenger[]) => {
         console.log('Data'+ data);
         this.passengers = data;
       });*/ // problem with db locally 
      this.passengerService.getJSON().subscribe(data => {
        this.passengers = data.passengers;
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

}
