import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Enquiry } from './enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private _http:HttpClient) { }

   url='http://localhost:3000/enquiry';

  sendEnquiry(enquiry:Enquiry){
     return this._http.post(this.url,enquiry) 
  }
}
