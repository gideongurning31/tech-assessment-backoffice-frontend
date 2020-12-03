import { Injectable } from '@angular/core';
import { HttpUtilService } from '../common/http-util.service';

@Injectable()
export class EmployeeManagementService {
  constructor(private http: HttpUtilService) {}

  getAllEmployee() {
    return this.http.get('/api/employee');
  }

  getEmployeeById(id: string) {
    return this.http.get('/api/employee/' + id);
  }

  createEmployee(payload: any) {
    return this.http.post('/api/employee', payload);
  }

  editEmployee(id: string, payload: any) {
    return this.http.post('/api/employee/' + id, payload);
  }

  deleteEmployee(id: string) {
    return this.http.delete('/api/employee/' + id);
  }
}
