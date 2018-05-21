import { Component, OnInit, Input } from '@angular/core';
import { PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() person: PhoneBookEntry;
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
