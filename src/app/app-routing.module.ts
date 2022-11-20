import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TrainingComponent } from './training/training.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoaniqComponent } from './loaniq/loaniq.component';
import { CondorComponent } from './condor/condor.component';
import { FfcComponent } from './ffc/ffc.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'',component:TrainingComponent, children:[  {path:'loaniq',component:LoaniqComponent},
                                                    {path:'condor',component:CondorComponent},
                                                    {path:'ffc',component:FfcComponent}]},
  {path:'contacts',component:ContactsComponent},
  {path:'coursedetails/:tid', component:CoursedetailsComponent},
  {path:'**',component:PagenotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
