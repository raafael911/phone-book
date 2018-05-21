import { Component, OnInit } from '@angular/core';

import { PhoneBookEntryService, PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  entries: PhoneBookEntry[];
  selectedEntry: PhoneBookEntry;

  constructor(private phoneBookEntryService: PhoneBookEntryService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.phoneBookEntryService.getAllEntries()
      .subscribe(entries => this.entries = entries);
  }

  onSelect(entry: PhoneBookEntry): void {
    this.selectedEntry = entry;
  }

}
