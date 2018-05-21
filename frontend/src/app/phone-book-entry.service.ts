import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PhoneNumber } from './phone-number';

export interface PhoneNumber {
  phoneNumber: string;
  category: string;
}

export interface PhoneBookEntry {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumbers: PhoneNumber[];
}

@Injectable({
  providedIn: 'root'
})

export class PhoneBookEntryService {

  private REST_URL: string = 'http://localhost:3000/phoneBookEntries';

  constructor(private http: HttpClient) {}

  getAllEntries(): Observable<PhoneBookEntry[]> {
    return this.http.get<PhoneBookEntry[]>(this.REST_URL);
  }

  getEntry(id: string): Observable<PhoneBookEntry> {
    return this.http.get<PhoneBookEntry>(`${this.REST_URL}/${id}`);
  }

  insertEntry(entry: PhoneBookEntry): Observable<PhoneBookEntry> {
    return this.http.post<PhoneBookEntry>(this.REST_URL, entry);
  }

  updateEntry(entry: PhoneBookEntry): Observable<void> {
    return this.http.put<void>(`${this.REST_URL}/${entry._id}`, entry);
  }

  deleteEntry(entry: PhoneBookEntry) {
    return this.http.delete(`${this.REST_URL}/${entry._id}`);
  }
}
