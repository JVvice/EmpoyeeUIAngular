import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';


const routes: Routes = [
  {
    path:'',
    component: EmployeesListComponent
  },
  {
    path:'employees',
    component: EmployeesListComponent
  },
  {
    path:'employees/add',
    component: AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path:'departments',
    component: DepartmentListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
