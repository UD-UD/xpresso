import { Injectable } from '@angular/core';

const firebase = require("nativescript-plugin-firebase/app");

@Injectable()
export class FireBaseDbService {
db :any;
  constructor() { 
  }

  initfirebase(){
    //firebase.init({});
    //this.db = firebase.firestore();
    /*alert({
      title : "hello",
      message :"Ujjal"

    });
    /*this.db.collection("users").get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
           console.log(`${doc.id} => ${doc.data()}`);
       });
     })*/
   }
}
