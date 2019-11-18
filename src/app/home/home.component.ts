import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps:any;
  constructor(public service:DataService, public router : Router) { 

    this.getData();
  }


  ngOnInit() 
  {
    console.log("Home Component Loaded")
    //  let resultstate=this.service.getData();
    // resultstate.subscribe((data)=>{
    //    this.emps= data;
    //  });
     
  }

  

  getData(){

    this.service.getData().subscribe((res)=>{
      console.log(res);
      this.emps=res;
    })
  }


  delete(no){
    //alert(no);
    this.service.delete(no).subscribe((res)=>{
      this.getData();
    })
  }

  


}
