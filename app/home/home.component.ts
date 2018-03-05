import { Component, OnInit } from "@angular/core";

import { TextView } from "ui/text-view";

import * as dialogs from "tns-core-modules/ui/dialogs";

import { FireBaseDbService } from "../services/fire-base-db.service";

import { CouchbaseDbService} from "../services/couch-base-db.service"
import * as user from '../user'

//import { Couchbase } from "nativescript-couchbase";
import { QrcodeService } from "../services/qrcode.service"

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
    constructor(private firebase : FireBaseDbService, private couchbase : CouchbaseDbService, private barcodeService : QrcodeService) {
      //  this.database = new couchbaseModule.Couchbase("data");
      //this.profile = new user.user("pinky","motu")
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
        this.couchbase.updateDoc(this.documentId);
        console.log(JSON.stringify(this.couchbase.getDoc(this.documentId)))
        
       }


    scan(){
        this.barcodeService.scanBarcode();
        // this.imgSource = this.barcodeService.generateBarcode({
        //     name : 'Ujjal',
        //     uuid : '1234#abcd'
        // });
    }
}
