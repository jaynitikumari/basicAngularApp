import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from './services/employee-data.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddDataComponent } from './components/add-data/add-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angularApp';
  filterdata:any;
  public employee:any = [];
  
  public designation: string = "All";  
 


  constructor(public api:EmployeeDataService){
    
    
    }

    ngOnInit(): void {
      this.api.employees().subscribe((data)=>{
        console.log(data);
        this.employee = data;
      })

     

    
    }

  // onSave(){
  //   this.employee.push(this.newAttribute)
  //   this.newAttribute = {};
  // }

 
  manager() {
    this.designation = 'Manager';
  }
  assistant() {
    this.designation= 'Assistant Manager';
  }
  sales() {
    this.designation = 'Sales Manager';
  }
  consultant() {
    this.designation = 'Sales Consultant';
  }
 all() {
    this.designation = 'All';
  } 
}


