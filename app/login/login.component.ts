import { Component, OnInit ,Input} from '@angular/core';
import { FireBaseDbService } from '../services/fire-base-db.service';
import { Toasty } from 'nativescript-toasty';
import { UserData } from '../model/UserData';
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public user: UserData;
  public password : string;

  constructor(private fireBaseDbService : FireBaseDbService,private routerExtensions: RouterExtensions) { 
    this.user = new UserData()
  }

  ngOnInit() {
   }

  login(){
    console.log(this.user.email +" "+ this.password)
    this.fireBaseDbService.loginUser({
      email : this.user.email,
      password : this.password
    })
    .then(result => {
      const toast = new Toasty("login Succesfull");
      toast.show();
      this.routerExtensions.navigate(["/profile"], {
        transition: {
            name: "fade",
            duration: 2000,
            curve: "linear"
        }
      });})
      .catch(error => {
        const toast = new Toasty("Login Failed.Try later");
       // this.password = JSON.stringify(error);
        toast.show();
      });
  }
}
