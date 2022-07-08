import { Component, OnInit } from '@angular/core';
import {EmployeeDataService} from './services/employee-data.service'
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angularApp';
  filterdata:any;
  public employee:any = new Array();
  private newAttribute: any = {};
  name:any;
  id: any;
  designation: any;


  constructor(public api:EmployeeDataService){
    
    
    }

    ngOnInit(): void {
      this.api.employees().subscribe((data)=>{
        console.log(data);
        this.employee = data;
      })
    }

  onSave(){
    this.employee.push(this.newAttribute)
    this.newAttribute = {};
  }
}


