import { Injectable } from '@angular/core';
import { Couchbase } from "nativescript-couchbase";
import { UserData } from "../model/UserData";
import { Toasty } from 'nativescript-toasty';

@Injectable()
export class CouchdbService {

  database : Couchbase ;
  DATABASE_NAME = "user-database";
  userData : UserData;
  rows : any;
  constructor() { }

  private initCouch() : void {
    if(this.database == undefined){
      this.database = new Couchbase(this.DATABASE_NAME); //create db if not present or getinstance
      this.database.createView("getUserData", "1", function(document, emitter) {
        if(document.userdata) {
            emitter.emit(document._id, document);
        }
      });
    }
  }

  private createUserDataEntry(userdata : UserData) : Number {
    this.initCouch();
    return this.database.createDocument({
      "userdata" : userdata
    });
  }
  
  getCouchData() {
    if(this.rows == undefined || this.rows.length == 0){
      this.initCouch();
      let rows = this.database.executeQuery("getUserData");
      for(let i = 0; i < rows.length; i++) {
        console.log(i)
          console.log(JSON.stringify(rows[i]));
      }
      this.rows = rows;
    }
    return this.rows;
  }

  setUserData(userdata : UserData){
    if(this.getCouchData().length == 0) // new user
    {
        console.log(this.createUserDataEntry(userdata));
      //  this.DocId = this.createUserDataEntry(userdata)
    }
        else
        {
         this.getCouchData();
        }
  }

  updateUserData(docId, userdata : UserData)
  {
    this.database.updateDocument(docId ,  {"userdata" : userdata});
  }

  checkLoggedInStatus() : boolean{ 
    this.initCouch();
    let rows = this.getCouchData();
    if(rows.length != 0){
      if(rows[0].userdata){
        return rows[0].userdata.isLoggedIn ? true : false;
      }
    }
    else 
      return false;
      
  }

  getMessages(){
    if(this.rows == undefined || this.rows.length == 0){
      this.getCouchData();
    }
    return this.rows[0].userdata.messages;
  }
}
