import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import { FilterObject } from './filter.component';

@Injectable()
export class FilterHelper {
  constructor() {}

  applyFilter(filter: FilterObject, data: Employee): Employee {
    const singleFilter = !filter.key2 || !filter.value2;
    if ((singleFilter && data[filter.key1].toLowerCase().search(filter.value1.toLowerCase()) > -1)
      || (!singleFilter && data[filter.key1].toLowerCase().search(filter.value1.toLowerCase()) > -1
      && data[filter.key2].toLowerCase().search(filter.value2.toLowerCase()) > -1)) {
        return data;
    }
    return null;
  }
}
