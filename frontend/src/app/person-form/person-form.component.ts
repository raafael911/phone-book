import { Component, OnInit, Input } from '@angular/core';
import { PhoneBookEntry, PhoneNumber, PhoneBookEntryService } from '../phone-book-entry.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input() person: PhoneBookEntry;
  @Input() editMode: boolean;

  categoryOptions: Array<String> = ['private', 'mobile', 'business'];

  constructor(private phoneBookEntryService: PhoneBookEntryService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.phoneBookEntryService.insertEntry(this.person);
  }

  abortEdit() {

  }

  addPhoneNumber() {
    this.person.phoneNumbers.push(new PhoneNumber());
  }

}
