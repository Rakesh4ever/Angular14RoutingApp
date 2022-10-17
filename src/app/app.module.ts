import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TrainingComponent } from './training/training.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoaniqComponent } from './loaniq/loaniq.component';
import { CondorComponent } from './condor/condor.component';
import { FfcComponent } from './ffc/ffc.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TrainingComponent,
    ContactsComponent,
    PagenotfoundComponent,
    LoaniqComponent,
    CondorComponent,
    FfcComponent,
    CoursedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
