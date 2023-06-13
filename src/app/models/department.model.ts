import { Employee } from "./employee.model";

export interface Department{
    departmentId: number;
    departmentName: string;
    description: string;
    employees: Employee[];
}