import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../model/UserData';
import { CouchdbService } from "../services/couchdb.service"
import {RouterExtensions} from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
     public user : any;
     public rows : any;
     public userdata : any;
     public docId : any;
     public userData : UserData;

  constructor(private routerExtensions: RouterExtensions,
    private couchdb : CouchdbService) {

      this.user = new UserData()
      this.rows = this.couchdb.getCouchData();
    console.log(JSON.stringify(this.rows))
      this.userdata =this.rows[0].userdata;
      this.user.name = this.userdata.name;
      this.user.profile_pic = this.userdata.profile_pic;
      this.user.email = this.userdata.email;
      this.user.isOnline = this.userdata.isOnline;
      this.user.firebaseID = this.userdata.firebaseID;
      this.user.QRcode = this.userdata.QRcode;
      this.user.messages = this.userdata.messages;
      this.user.isLoggedIn = this.userdata.isLoggedIn;
      this.docId = this.rows[0]._id;
    //this.user.docId = this.userdata.DocId;
      console.log(this.user.name)
     }

  ngOnInit() { 
    this.rows = this.couchdb.getCouchData();
    console.log(JSON.stringify(this.rows))
   
    
  }

  update()
  {
    this.userData= {
      name : this.user.name,
      profile_pic : "",
      email : this.user.email,
      isOnline : true,
      firebaseID : "",
      QRcode :  this.user.QRcode,
      messages : "",
      isLoggedIn : true,
    //  DocId : this.user.docId

    }
    this.couchdb.updateUserData(this.docId, this.userData);
  }


}
