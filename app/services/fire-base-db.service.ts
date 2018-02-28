import { Injectable } from '@angular/core';

const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class FireBaseDbService {
db :any;
  constructor() { 
  }

  initfirebase(){
    firebase.init({}).then(()=>{
      console.log('FireBase Initialized');
    });
   }

  getData(ref : string){
    firebase.getValue(ref)
    .then(result => console.log(JSON.stringify(result)))
    .catch(error =>console.log(JSON.stringify(error)));
  }

  registerUser(user){
    console.log(JSON.stringify(user));
    firebase.createUser(user).then(
        function (result) {
          console.log(JSON.stringify(result));
        },
        function (errorMessage) {
          console.log(JSON.stringify(errorMessage));
        }
    );
  }

}
