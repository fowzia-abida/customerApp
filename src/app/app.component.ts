import { Component } from '@angular/core';
import {Customer} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerApp';
  CustomerModel : Customer = new Customer(); //customer component is creating a object CustomerModel which we need to bind in HTML file with ngModel;
  // it is for the single record talks with the text boxes
   DisplayBelowTable : Array<Customer> = new Array<Customer>()//it is for collection which will talk with table
  Add(){  // when the add button is clicked
     this.DisplayBelowTable.push(this.CustomerModel)
    this.CustomerModel = new Customer();
 //clear UI and attach new customer obj

  }
}
