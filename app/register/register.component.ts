import { Component, OnInit, Input } from '@angular/core';
import { TextView } from "ui/text-view";
import { User } from '../model/user';
import { FireBaseDbService } from '../services/fire-base-db.service';
import { Toasty } from 'nativescript-toasty';

import {RouterExtensions} from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  
  constructor(private fbservice : FireBaseDbService ,private routerExtensions: RouterExtensions) {
    this.user = new User()
  }

  ngOnInit() :void { }

  signUp(): void
  {
  this.fbservice.registerUser({
     email : this.user.email,
     password : this.user.password
   }).then(result => {
    //this.user.email = JSON.stringify(result);
    const toast = new Toasty("Registration Succesfull");
    toast.show();
    this.routerExtensions.navigate(["/profile"], {
        transition: {
            name: "fade",
            duration: 2000,
            curve: "linear"
        }
      });
    },
    errorMessage => {
      //this.user.email = JSON.stringify(errorMessage);
      const toast = new Toasty("Registration Failed.Try later");
      toast.show();
    }
  );
   
  }
   
}
