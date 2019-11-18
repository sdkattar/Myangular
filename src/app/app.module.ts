import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
//import { AuthService } from './auth.service';
//import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
//import { LoginComponent } from './login/login.component';
import { NoShowComponent } from './no-show/no-show.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // AuthService,
    ContactComponent,
    //AuthService,
    AddComponent,
    UpdateComponent,
  //  LoginComponent,
    NoShowComponent,
    AboutComponent
  ],
  imports: [ 
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
     
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
      {path:'about',component:AboutComponent},
      {path:'add',component:AddComponent},
  //    {path: "login", component: LoginComponent},
      {path:'update/:no',component:UpdateComponent},
      {path:'**',component:NoShowComponent}

      

       
      



    ])
    
  ],
  providers: [HttpClientModule,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
//    alert("sdf fdgfc");
    console.log("app module created");
  }
}
