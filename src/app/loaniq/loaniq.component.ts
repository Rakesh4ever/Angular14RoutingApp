import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loaniq',
  templateUrl: './loaniq.component.html',
  styleUrls: ['./loaniq.component.css']
})
export class LoaniqComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  /*
  public technologies =[
    { tid:1, coursename:"Azure Cloud",trainer:"Rakesh"},
    { tid:2, coursename:"LoanIQ",trainer:"Sourav"},
    { tid:3, coursename:"FFC",trainer:"Kaustav"},
    { tid:4, coursename:"Open API",trainer:"Rakesh"},
    { tid:5, coursename:"Condor",trainer:"Deepa"}
    
   ]; */

   public technologies =[
    { tid:1, coursename:"LoanIQ Module 1",trainer:"Rakesh"},
    { tid:2, coursename:"LoanIQ Module 2",trainer:"Sourav"},
    { tid:3, coursename:"LoanIQ Module 3",trainer:"Kaustav"},
    { tid:4, coursename:"LoanIQ Module 4",trainer:"Rakesh"},
    { tid:5, coursename:"LoanIQ Module 5",trainer:"Deepa"}
    
   ];

   onSelect(technology:any){
    let tid=technology.tid;
    this.router.navigate(["coursedetails",tid])
   
  }
  

}
