import { Component, OnInit } from '@angular/core';

import { PhoneBookEntryService, PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  entries: PhoneBookEntry[];
  searchText = '';

  constructor(private phoneBookEntryService: PhoneBookEntryService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.phoneBookEntryService.getAllEntries()
      .subscribe(entries => this.entries = entries);
  }

  filterFunction(entry: PhoneBookEntry, searchText: string): boolean {

    if (!entry) {
      return true;
    }

    let lowerSearchText = searchText.toLowerCase();

    return entry.phoneNumbers.some(contact => contact.phoneNumber.match(lowerSearchText) !== null) ||
      entry.firstName.toLowerCase().match(lowerSearchText) !== null ||
      entry.lastName.toLowerCase().match(lowerSearchText) !== null;
  }
}
