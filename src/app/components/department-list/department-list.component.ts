import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  constructor(private _departmentService: DepartmentService){ }

  sDepartment: Department | undefined;
  departments: Department[] =[];
  
  ngOnInit(): void {
    this._departmentService.getAllDepartments()
    .subscribe({
      next: (departments) =>{
        this.departments = departments;
        console.log(departments);
      },
      error: (response)=>{
        console.log(response);
      }
    })
  }

  setSelectedDepartment(department: Department): void{
    this.sDepartment = department;
  }
}
