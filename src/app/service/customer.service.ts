import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

@Injectable()
export class CustomerService {

    private api: string = 'http://localhost:8080';
    private customer: string = 'customer';
  
    constructor(private http: Http) { }
  
    private handdleErr(err: any): Promise<any> {
      console.log(err);
      return Promise.reject(err.message || err);
    }
  
    getAllCustomers() {
    //   return this.http.get(`${this.api}/${this.customer}/get/all`)
        return this.http.get('http://localhost:8080/customer/get/all')
        .toPromise()
        .then(res => res.json())
        .catch(this.handdleErr);
    }
}