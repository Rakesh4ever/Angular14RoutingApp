import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';
import { EnquiryService } from '../enquiry.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private enquiryService:EnquiryService) { }

  ngOnInit(): void {
  }

  trainings=['LoanIQ','Condore','FFC','Azure Cloud'];

  enquiry1=new Enquiry('','default','','',0)

  hasGenderError:boolean=true;
  validateGender(gender:any){

    if(gender=="default"){
      this.hasGenderError=true;
    }
    else{
      this.hasGenderError=false;
    }
  }

  submitForm=()=>{
   // console.log(this.enquiry1)
    this.enquiryService.sendEnquiry(this.enquiry1).subscribe((data)=>console.log("Data ",data),
    (error)=>console.log("Error!",error))
                                                  

  }

}
