import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  trainings=['LoanIQ','Condore','FFC','Azure Cloud'];

  enquiry1=new Enquiry('Rakesh','rakesh@gmail.com','LoanIQ',9500000000)

}
