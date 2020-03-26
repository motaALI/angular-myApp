import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css']
})
export class PassengerCountComponent {
   
  @Input() items: Passenger[];

 public checkedInCount() {
    if (this.items) {
      return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
      } else {
        console.log('zero checkedIn');
      }
 }

}
