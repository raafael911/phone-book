import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhoneBookEntryService, PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  entry: PhoneBookEntry;

  constructor(
    private route: ActivatedRoute,
    private phoneBookEntryService: PhoneBookEntryService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getEntry();
    });
  }

  getEntry(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.phoneBookEntryService.getEntry(id)
      .subscribe(entry => this.entry = entry);
  }
}
