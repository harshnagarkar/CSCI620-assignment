import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service';
import {ListComponent} from 'src/app/components/list/list.component';
@Component({
  providers:[ListComponent],
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employee = {
    Emp_ID: "0",
    Pay_from: "2/5/2020",
    Pay_to: "5/5/2020",
    Position:"General",
    Department:"General",
    Pay_per_hour:"12",
    Tax_percent: "15",
    Active: true
  };
  submitted = false;

  constructor(private employeeService: EmployeeService, private liComponent: ListComponent) { }
  ngOnInit(): void {
  }

  create(){

    const data = {
      "Emp_ID": this.employee.Emp_ID,
      "Pay_from": this.employee.Pay_from,
      "Pay_to": this.employee.Pay_to,
      "Position": this.employee.Position,
      "Department": this.employee.Department,
      "Pay_per_hour": parseFloat(this.employee.Pay_per_hour),
      "Tax_percent": parseFloat(this.employee.Tax_percent),
      "Active": this.employee.Active
    };
    console.log(this.employee.Position+" "+this.employee.Pay_per_hour);
    this.employeeService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        window.location.reload();
        // this.liComponent
      },
      error => {
        console.log(error);
      });
  }

}
