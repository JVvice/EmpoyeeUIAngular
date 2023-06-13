import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseApiUrl: string = 'https://localhost:7047';

  constructor(private http: HttpClient) { }

  getAllDepartments():Observable<Department[]>{
    return this.http.get<Department[]>(this.baseApiUrl + '/api/department');
  }

  getDepartment(id: number):Observable<Department>{
    return this.http.get<Department>(this.baseApiUrl + '/api/department'+ id )
  }
}
