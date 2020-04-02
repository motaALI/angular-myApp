import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {

  passenger: Passenger;

  constructor(
       private router: Router,
       private route: ActivatedRoute,
       private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    // Route params, data-fetching with switchMap
    // need to marge the 2 methodes so use switchMap
    /*this.route.params
     .subscribe((data: Params) => {
      console.log(data);
     })
      this.passengerService
      .getPassenger('3')
      .subscribe((data: Passenger) => this.passenger = data );*/
      this.route.params
     .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
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
  goBack() {
    this.router.navigate(['/passengers']);
  }
}
