import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class PhoneNumber {
  phoneNumber: string;
  category: string;
}

export class PhoneBookEntry {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumbers: PhoneNumber[];

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumbers = new Array<PhoneNumber>();
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PhoneBookEntryService {

  private REST_URL = 'http://localhost:3000/phoneBookEntries';

  constructor(private http: HttpClient) {}

  getAllEntries(): Observable<PhoneBookEntry[]> {
    return this.http.get<PhoneBookEntry[]>(this.REST_URL);
  }

  getEntry(id: string): Observable<PhoneBookEntry> {
    return this.http.get<PhoneBookEntry>(`${this.REST_URL}/${id}`);
  }

  insertEntry(entry: PhoneBookEntry): Observable<PhoneBookEntry> {
    return this.http.post<PhoneBookEntry>(this.REST_URL, entry, httpOptions);
  }

  updateEntry(entry: PhoneBookEntry): Observable<void> {
    return this.http.put<void>(`${this.REST_URL}/${entry._id}`, entry);
  }

  deleteEntry(entry: PhoneBookEntry) {
    return this.http.delete(`${this.REST_URL}/${entry._id}`);
  }
}
