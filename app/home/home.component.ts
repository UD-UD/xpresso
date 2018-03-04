import { Component, OnInit } from "@angular/core";

import { TextView } from "ui/text-view";

import * as dialogs from "tns-core-modules/ui/dialogs";

import { FireBaseDbService } from "../services/fire-base-db.service";

import { CouchbaseDbService} from "../services/couch-base-db.service"

//import { Couchbase } from "nativescript-couchbase";
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public data ="Fb Data";
    public database : any
  profile :any
  retProfile : any
    public documentId :any
    constructor(private firebase : FireBaseDbService, private couchbase : CouchbaseDbService) {
      //  this.database = new couchbaseModule.Couchbase("data");
        this.profile  = {
           
            firstname: 'xx',
            lastname: 'yy'
        };
    }

    ngOnInit(): void {
       
    }

    check(){
        console.log('clicked');

        
        
        var user ={
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };

        this.firebase.registerUser(user);
        console.log(JSON.stringify(user))
    }
    createDB() : void{
        this.documentId = this.couchbase.createDB(this.profile);
        this.retProfile = this.couchbase.getDoc(this.documentId);
        console.log(JSON.stringify(this.retProfile))
       }

}
