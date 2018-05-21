import { Pipe, PipeTransform } from '@angular/core';

/* Filter an array of objects by a property.
 *
 * Takes a `searchText` argument which denotes the string to search for
 * Takes a `itemProperty` argument which denotes the property of each object which will
 *  be used to apply the filter function to.
 *
 * The filter is case insensitive and uses the String.contains() function.
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

  transform(items: any[], searchText: string, item: any, filterFunction: Function): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter(_item => {
      return filterFunction(_item, searchText);
    });
  }
}
