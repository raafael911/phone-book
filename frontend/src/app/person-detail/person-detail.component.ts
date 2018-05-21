import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PhoneBookEntryService, PhoneBookEntry } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() entry: PhoneBookEntry;

  constructor(
    private route: ActivatedRoute,
    private phoneBookEntryService: PhoneBookEntryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntry();
  }

  getEntry(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.phoneBookEntryService.getEntry(id)
      .subscribe(entry => this.entry = entry);
  }
}
