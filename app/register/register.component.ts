import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TextView } from "ui/text-view";
import { UserData } from '../model/UserData';
import { FireBaseDbService } from '../services/fire-base-db.service';
import { Toasty } from 'nativescript-toasty';

import {RouterExtensions} from "nativescript-angular/router";

import { CouchdbService } from "../services/couchdb.service"
import {QrcodeService} from "../services/qrcode.service"
import * as imagepicker from "nativescript-imagepicker";
import * as imageSource from "tns-core-modules/image-source";

import { data } from "./sampleuser"

import { Utils } from "../utils/Utils"

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
  public DocId : Number;
  public items = [];
  public profilePic : any;
  public isOnline : any;

  constructor(private fbservice : FireBaseDbService ,
              private routerExtensions: RouterExtensions,
              private couchdb : CouchdbService, private QRcode : QrcodeService, 
              private _changeDetectionRef: ChangeDetectorRef) {

    this.user = new UserData()
    this.items[0] = imageSource.fromFile("~/image/person.jpg")
  }

  ngOnInit() :void {
    
   }


// uncomment when using restration feature

 signUp(): void
  {
  this.fbservice.registerUser({
     email : this.user.email,
     password : this.password
   }).then(result => {
    //this.user.email = JSON.stringify(result);
    this.user.firebaseID = result.uid;
   this.createUser();
    const toast = new Toasty("Registration Succesfull");
    toast.show();
    this.fbservice.setUser(this.userData);
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
   
  }

 signUpF():void{
  this.createUser();
 
  this.fbservice.setUser(this.userData);
 this.fbservice.getData('/users/'+this.userData.firebaseID+'/profile_pic') 
 .then(result => {//console.log(JSON.stringify(result.value))
  this.isOnline = JSON.stringify(result.value)
 // console.log(this.isOnline);
 this.getstatus();
  
})
.catch(error => console.log("Error: " + error));


 }
 getstatus()
 {
  console.log(this.isOnline);
 }
 addFriend()
 {

 }
  signUpC(): void{
    this.createUser();
    this.couchdb.setUserData(this.userData);
    this.routerExtensions.navigate(["/dashboard"], {
      transition: {
          name: "fade",
          duration: 2000,
          curve: "linear"
      }
    })
  }
  onSelectSingleTap() {
    let context = imagepicker.create({
        mode: "single"
    });
    this.startSelection(context);
}
  startSelection(context) {
    let _that = this;
  
    context
    .authorize()
    .then(() => {
        _that.items = [];
        return context.present();
    })
    .then((selection) => {
     // _that.profilePic = "";
        console.log("Selection done:");
        selection.forEach((selected)=> {
        //  _that.profilePic = "";
          selected.getImage()
          .then((imageSource) =>{
            this.profilePic =
            imageSource.toBase64String("jpg"); // NULL
            console.log(this.profilePic);
           });
            console.log("----------------");
            console.log("uri: " + selected.uri);
            console.log("fileUri: " + selected.fileUri);
           console.log(this.profilePic);
            });
        _that.items = selection;
       // console.log(this.profilePic);
      
       console.log(this.profilePic)
        _that._changeDetectionRef.detectChanges();
        
    }).catch(function (e) {
        console.log(e);
    });
  }
  

  createUser() : any
  {
    //  this.userData= {
    //    name : this.user.name,
    //    profile_pic : "",
    //    email : this.user.email,
    //    isOnline : true,
    //    firebaseID : "",
    //    QRcode : this.QRcode.generateBarcode(this.user.email),
    //    messages : "",
    //    isLoggedIn : true
    //  }

    //create demo user
    data.userdata.messages.pinky.img = Utils.generateBase64String(Utils.readImage());
    data.userdata.messages.ujjal2.img = Utils.generateBase64String(Utils.readImage());
    
    this.userData = {
      name : this.user.name,
      profile_pic : this.profilePic,
      email : this.user.email,
      isOnline : true,
      firebaseID : "vVg10raLuXfsxx4LNfPFHSrLboL2",
      QRcode : this.QRcode.generateBarcode(this.user.firebaseID),
      messages : data.userdata.messages,
      isLoggedIn : true
    }

   
  }
   
}
