import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
//import {employee} from 'src/app/app.component'

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {


  empID :any;
  name: any;
  email: any;
  designation:any;

  // @Output() addData: EventEmitter<data> => ($event)

 constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const data ={
      empID:this.empID,
      name: this.name,
      email:this.email,
      designation:this.designation,
      active:true
    
    }
  }

  adddata(data: Data){
    console.log(data);
   //this.employee.push(data);
  }

}
