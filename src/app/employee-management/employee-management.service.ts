import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeManagementService {
  constructor() {}

  getAllEmployee(): Array<Employee> {
    const data = localStorage.getItem('data');
    if (!data) {
      return [];
    }
    return JSON.parse(data);
  }

  createEmployee(payload: Employee) {
    const data = [payload, ...JSON.parse(localStorage.getItem('data'))];
    localStorage.setItem('data', JSON.stringify(data));
  }

  editEmployee(id: string, payload: Employee) {
    const data = JSON.parse(localStorage.getItem('data'));
    localStorage.removeItem('data');
    data.forEach((item: Employee, i: number) => {
      if (item.username === id) {
        data[i] = payload;
        return;
      }
    });
    localStorage.setItem('data', JSON.stringify(data));
  }

  deleteEmployee(id: string) {
    const data = JSON.parse(localStorage.getItem('data'));
    localStorage.removeItem('data');
    data.forEach((item: Employee) => {
      if (item.username === id) {
        data.splice(data.indexOf(item), 1);
        return;
      }
    });
    localStorage.setItem('data', JSON.stringify(data));
  }
}
