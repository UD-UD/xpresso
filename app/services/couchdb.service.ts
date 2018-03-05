import { Injectable } from '@angular/core';
import { Couchbase } from "nativescript-couchbase";
import { UserData } from "../model/UserData";

@Injectable()
export class CouchdbService {

  database : Couchbase ;
  DATABASE_NAME = "user-database";
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
     this.initCouch();
     let rows = this.database.executeQuery("getUserData");
     for(let i = 0; i < rows.length; i++) {
        console.log(rows[i]);
     }
     return rows;
  }

  setUserData(userdata : UserData){
    if(this.getCouchData().length == 0) // new user
        console.log(this.createUserDataEntry(userdata));
    this.getCouchData();
  }
}
