import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../employee.model'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = new Employee(0, "", 1000);

  constructor(private http: Http) {

  }

  ngOnInit() {
  }

  onSubmit(employee: Employee) {
    alert("sdshg");
    console.log(employee);
    this.http.post('http://localhost:8080/demo/add', employee).
      subscribe(status => console.log(JSON.stringify(status)));
    alert("done");
  }

}
