import { Component, OnInit, Input } from '@angular/core';

import { PhoneBookEntryService, PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() entry: PhoneBookEntry;

  constructor() { }

  ngOnInit() {
  }

}
