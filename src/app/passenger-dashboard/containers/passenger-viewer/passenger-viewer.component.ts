import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
      this.passengerService
      .getPassenger('3')
      .subscribe((data: Passenger) => this.passenger = data );
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.passengerService
    .udatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event);
    });
  }
}
