import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input () detail: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;
  
  constructor() { }


  ngOnChanges(changes) {

    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
   // console.log('ONChanges')
  }

  ngOnInit() {
   // console.log('OnInit');
  }

  onNameChange(value: string) {
      this.detail.fullname = value;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  onEdit() {
    this.edit.emit(this.detail);
  }
  toggleEditing() {
     if (this.editing )  {
       this.edit.emit(this.detail);
     }
     this.editing = !this.editing;
  }
  goToPassenger() {
    this.view.emit(this.detail);
  }
}
