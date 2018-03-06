import { Component, OnInit, Input } from '@angular/core';
import { TextView } from "ui/text-view";
import { UserData } from '../model/UserData';
import { FireBaseDbService } from '../services/fire-base-db.service';
import { Toasty } from 'nativescript-toasty';

import {RouterExtensions} from "nativescript-angular/router";

import { CouchdbService } from "../services/couchdb.service"
import {QrcodeService} from "../services/qrcode.service"

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public user: UserData;
  public password : string;
  public userData : UserData;

  constructor(private fbservice : FireBaseDbService ,
              private routerExtensions: RouterExtensions,
              private couchdb : CouchdbService, private QRcode : QrcodeService) {

    this.user = new UserData()
  }

  ngOnInit() :void { }


// uncomment when using restration feature

 /* signUp(): void
  {
  this.fbservice.registerUser({
     email : this.user.email,
     password : this.password
   }).then(result => {
    //this.user.email = JSON.stringify(result);
    
   this.createUser();
    const toast = new Toasty("Registration Succesfull");
    toast.show();
    this.signUpC();
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
   
  }*/

  signUp(): void{
    this.createUser();
    this.couchdb.setUserData(this.userData);
  }

  createUser() : any
  {
     this.userData= {
       name : this.user.name,
       password : this.user.password,
       profile_pic : "",
       email : this.user.email,
       isOnline : true,
       firebaseID : "",
       QRcode : this.QRcode.generateBarcode(this.user.email),
       messages : ""
     }
  }
   
}
