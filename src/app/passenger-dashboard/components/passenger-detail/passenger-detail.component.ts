import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input () detail: Passenger;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  
  constructor() { }


  ngOnChanges(changes) {

    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ONChanges')
  }

  ngOnInit() {
    console.log('OnInit');
  }

  onNameChange(value: string) {
      this.detail.fullname = value;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
  onEdit() {
    this.edit.emit(this.detail.fullname);
  }
  toggleEditing() {
     if (this.editing )  {
       this.edit.emit(this.detail);
     }
     this.editing = !this.editing;
  }

}
