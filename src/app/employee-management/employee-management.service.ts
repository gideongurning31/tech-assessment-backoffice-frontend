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

  getEmployeeById(id: string) {}

  createEmployee(payload: Employee) {
    const data = [payload, ...JSON.parse(localStorage.getItem('data'))];
    localStorage.setItem('data', JSON.stringify(data));
  }

  editEmployee(id: string, payload: any) {}

  deleteEmployee(id: string) {}
}
