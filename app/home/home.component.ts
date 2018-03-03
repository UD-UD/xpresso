import { Component, OnInit } from "@angular/core";

import { TextView } from "ui/text-view";

import * as dialogs from "tns-core-modules/ui/dialogs";

import { FireBaseDbService } from "../services/fire-base-db.service";

import { QrcodeService } from "../services/qrcode.service"

const couchbaseModule = require("nativescript-couchbase");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public data ="Fb Data";
    public imgSource = "";
    public database;

    public documentId;

    constructor(private firebase : FireBaseDbService,private barcodeService : QrcodeService) {
        this.database = new couchbaseModule.Couchbase("test-database");
    }

    ngOnInit(): void {
        this.documentId = this.database.createDocument({
            "firstname": "Nic",
            "lastname": "Raboy",
            "address": {
                "city": "San Francisco",
                "state": "CA",
                "country": "USA"
            },
            "twitter": "https://www.twitter.com/nraboy"
        });
    }

    check(){
        console.log('clicked');

        
        
        var user ={
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };

        this.firebase.registerUser(user);
    }

    scan(){
        //this.barcodeService.scanBarcode();
        // this.imgSource = this.barcodeService.generateBarcode({
        //     name : 'Ujjal',
        //     uuid : '1234#abcd'
        // });

        console.log("DocID : "+JSON.stringify(this.documentId));

        var person = this.database.getDocument(this.documentId);
        console.log("Data :"+JSON.stringify(person));
    }
}
/**
 * For Android XML error : remove and rebuild
 * for : dexoverflow : see app.gradle in app_resource
 */