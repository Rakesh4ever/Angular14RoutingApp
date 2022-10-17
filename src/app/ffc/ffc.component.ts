import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ffc',
  templateUrl: './ffc.component.html',
  styleUrls: ['./ffc.component.css']
})
export class FfcComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public technologies =[
    { tid:1, coursename:"FFC Module 1",trainer:"Rakesh"},
    { tid:2, coursename:"FFC Module 2",trainer:"Sourav"},
    { tid:3, coursename:"FFC Module 3",trainer:"Kaustav"},
    { tid:4, coursename:"FFC Module 4",trainer:"Rakesh"},
    { tid:5, coursename:"FFC Module 5",trainer:"Deepa"}
    
   ];

   onSelect(technology:any){
    let tid=technology.tid;
    this.router.navigate(["coursedetails",tid])
   
  }

}
