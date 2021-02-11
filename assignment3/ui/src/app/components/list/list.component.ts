import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "src/app/services/employee.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private employeeService: EmployeeService) { }

  itemInfo:any;
  displayedColumns = ['Emp_ID', 'Position','Department',"Pay_per_hour","Update","Delete"];

  ngOnInit(): void {
    this.retrieveItems();
  }

  retrieveItems(): void {
    this.employeeService.getAll()
      .subscribe(
        data => {
          this.itemInfo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.ngOnInit();
  }

  deleteItem(id:string){
    console.log(id);
    this.employeeService.delete(id).subscribe(
      response => {
        console.log(response);
        this.retrieveItems();
      },
      error => {
        console.log(error);
      });
  }

  updateItem(id:string){
    console.log(id);
    window.location.href=`/update/${id}`;
  }

  create(){
    window.location.href="/create";
  }

  deleteAll(){
    this.employeeService.deleteAll().subscribe(response=>{
      console.log(response);
      window.location.reload();
    },error=>{
      console.log(error);
    })
  }
}
