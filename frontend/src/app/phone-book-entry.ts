import { PhoneNumber } from './phone-number';

export class PhoneBookEntry {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumbers: PhoneNumber[];
}
