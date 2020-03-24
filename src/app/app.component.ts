import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number; // added for worke with Pipes
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false
    }];
  title = 'gealgaded';
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  name: string = 'Mota'

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleChange(value: string) {
    this.name = value;
  }
  handleClick(value: string) {
    this.name = value;
    console.log(value);
  }

}
