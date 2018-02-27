import { Component, OnInit } from "@angular/core";

import { TextView } from "ui/text-view";

import * as dialogs from "tns-core-modules/ui/dialogs";
// import { FireBaseDbService } from "../fire-base-db.service"

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public data ="Fb DAta";
    constructor() {
    }

    ngOnInit(): void {
       
       
    }

    check(){

        // ----------- FireStore Access --------------------------------------
        // firebase.initializeApp({}).then((data)=>{
        //    console.log("Init : "+data)
        // });
        // var db = firebase.firestore();
        // db.collection("users").doc('oriyFE3xEA3DV6dDydib').get().then((doc) => {
        //     if (doc.exists) {
        //         this.data =doc.data();
        //     } else {
        //         // doc.data() will be undefined in this case
        //         this.data ="No such document!";
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // });


        // //-------------------Realtime Database Access -------------------------------------------
        
        firebase.init({
            persist: true
          });     
        firebase.getValue('/User')
        .then(result => console.log(JSON.stringify(result)))
        .catch(error => this.data = error);
    }
}
