import { Component, OnInit } from '@angular/core';

import { PhoneBookEntryService, PhoneBookEntry, PhoneNumber } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  entry: PhoneBookEntry;

  constructor() { }

  ngOnInit() {
    this.entry = new PhoneBookEntry ();
  }

}
