import { Component, OnInit } from '@angular/core';

import { PhoneBookEntry } from '../phone-book-entry';
import { PHONE_BOOK_ENTRIES } from '../mock-people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  entries = PHONE_BOOK_ENTRIES;
  selectedEntry: PhoneBookEntry;

  constructor() { }

  ngOnInit() {
  }

  onSelect(entry: PhoneBookEntry): void {
    this.selectedEntry = entry;
  }

}
