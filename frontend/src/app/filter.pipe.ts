import { Pipe, PipeTransform } from '@angular/core';

/* Filter an array of objects by a property.
 *
 * Takes a `searchText` argument which denotes the string to search for
 * Takes a `itemProperty` argument which denotes the property of each object which will
 *  be used to apply the filter function to.
 *
 * The filter is case insensitive and uses the String.startsWith() function.
 *
 * Usage:
 *   objectArray | exponentialStrength : searchText : 'objectPropertyName'
 * Example:
 *   {{ [{id: 1, name: 'Alex'},{id: 2, name: 'Peter'}] | filter:searchText:'name' }}
 */

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, itemProperty: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    if(!itemProperty) return [];

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      return item[itemProperty].toLowerCase().startsWith(searchText);
    });
  }
}