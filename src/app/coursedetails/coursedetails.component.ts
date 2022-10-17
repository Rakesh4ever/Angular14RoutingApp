import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }

  tid:number=0;
  ngOnInit(): void {
   // this.tid= parseInt(this.router.snapshot.paramMap.get("tid"))

   /*const  id =this.router.snapshot.paramMap.get("tid");  //Look at the diff b/w snapshot and paramMap Obserable
    this.tid=Number(id); */

    this.router.paramMap.subscribe((params:ParamMap) =>
    {
      const vid=params.get("tid");
      this.tid=Number(vid);
  })

  }

  goPrevious(){
//alert("going previous")
let temp=this.tid-1;
this.route.navigate(["coursedetails",temp])
  }

  goNext(){
   // alert("going Next")

   let temp=this.tid+1;
this.route.navigate(["coursedetails",temp])
  }
  }
  

