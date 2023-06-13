import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = 'https://localhost:7047';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl+ '/api/employees', 
    addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

  updateEmployee(id: string, emp: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, emp);
  }

  deleteEmployee(id: string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}
