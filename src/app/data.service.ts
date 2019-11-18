import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {

  }
  

   getData(){

    return this.http.get("http://localhost:8088/employees");

   }
   
   AddData(emp){
     return this.http.post("http://localhost:8088/employees",emp);
   }


   delete(no){
    return this.http.delete("http://localhost:8088/employees/"+no);
   }

   
   getDataById(no){

    return this.http.get("http://localhost:8088/employees/"+no);

   }

   update(emp){
    
    return this.http.put("http://localhost:8088/employees/"+emp.no,emp);

   }
}
