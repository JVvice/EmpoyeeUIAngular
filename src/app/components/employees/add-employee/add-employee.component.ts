import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployee: Employee = {
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    departmentId: 0
  };
  
  public loading: boolean = false;
  public added: boolean = false;
  constructor(private employeeService: EmployeesService, 
    private router: Router){}

  addEmployeeSubmit(){
    this.loading = true;
    this.employeeService.addEmployee(this.addEmployee)
    .subscribe({
      next: (employee) => {
        this.loading = false;
        this.router.navigate(["employees"]);
      },
      error: (response) =>{
        this.loading = false;
        console.log(response);
      }
    });
  }
}
