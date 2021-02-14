import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:string=""
  data:any;
  employee = {
    Emp_ID:"",
    Position:"",
    Department:"",
    Pay_per_hour:"",
    Tax_percent:"",
    Pay_from:"",
    Pay_to:"",
    Active:true
  }

  constructor(private route: ActivatedRoute, private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
   this.retrive(this.id);
   console.log(this.employee);
  }

  retrive(id:string){
    this.employeeService.get(id)
    .subscribe(
      data => {
        this.data = data;
        console.log(data);
        this.employee.Emp_ID=data.Emp_ID;
        this.employee.Position=data.Position;
        this.employee.Department=data.Department;
        this.employee.Active=true;
        this.employee.Tax_percent=data.Tax_percent;
        this.employee.Pay_per_hour=data.Pay_per_hour;
        this.employee.Pay_from=data.Pay_from;
        this.employee.Pay_to=data.Pay_to;
      },
      error => {
        console.log(error);
      });
    console.log("done");
  }

  save(){
    console.log("Hi");
    this.data.Position=this.employee.Position;
    this.data.Department=this.employee.Department;
    this.data.Tax_percent=this.employee.Tax_percent;
    this.data.Pay_per_hour=this.employee.Pay_per_hour;
    this.employeeService.update(this.id,this.data)
    .subscribe(
      data => {
        console.log("updated");
        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }
}
