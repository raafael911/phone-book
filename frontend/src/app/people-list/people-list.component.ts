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

  /** Filter function for the search box.
  *
  * Checks all phone numbers, firstName and lastName of `entry` if any of them
  * somewhere contains `searchText`.  The check is case-insensitive. Any match
  * will make this method return true.
  *
  * @param {PhoneBookEntry} entry to be checked for a match in `searchText`.
  * @param {string} searchText to be searched in `entry`.
  * @return {boolean} true if `entry` is a match for `searchText`, false otherwise.
  */
  filterFunction(entry: PhoneBookEntry, searchText: string): boolean {

    if (!entry) {
      return true;
    }

    const lowerSearchText = searchText.toLowerCase();

    return entry.phoneNumbers.some(contact => contact.phoneNumber.match(lowerSearchText) !== null) ||
      entry.firstName.toLowerCase().match(lowerSearchText) !== null ||
      entry.lastName.toLowerCase().match(lowerSearchText) !== null;
  }
}
