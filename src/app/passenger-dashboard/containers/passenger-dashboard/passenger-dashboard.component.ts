import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: [{name: 'TotoTATA', age: 3}]
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        children: [{name: 'Toto', age: 11}, {name: 'Tata', age: 7},]
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{name: 'Test', age: 4}, {name: 'Titi', age: 5},]
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        children: null
      }];
  }

  handleRemove(event: Passenger) {
    console.log(event);
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    })
  }
  handleEdit(event: Passenger) {
    console.log(event);
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.passengers);
  }


}
