import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { EmployeeDataService } from 'src/app/services/employee-data.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  // @Output() addData: EventEmitter<data> => ($event)
  public employee:any=[];
  ids:number=0;
  names:string='';
  emails:string='';
  designations:string='';

 constructor(private api:EmployeeDataService) { }

  ngOnInit() {
    this.api.employees().subscribe((data)=>{
      console.warn("get api data",data);
      this.employee=data
    })

   
  }

  addData(id:any,name:any,email:any,designation:any){
    this.ids=id;
    this.names=name;
    this.emails=email;
    this.designations=designation;
    this.employee.push({id:this.ids,Name:this.names,Email:this.emails,Designation:this.designations});
    this.names='';
    this.emails='';
    this.designations='';
    //this.showForm=0;
  }
  }



