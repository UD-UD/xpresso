import { Injectable } from '@angular/core';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';


const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

//import {ToolTip} from "nativescript-tooltip";

@Injectable()
export class FireBaseDbService {

  public logs : any
  constructor() {
    this.initfirebase();
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
          this.logs = JSON.stringify(result)
        //  var tip = new ToolTip({},{text: JSON.stringify(result)});
        //  tip.show();
        },
        function (errorMessage) {
          console.log(JSON.stringify(errorMessage));
          this.logs = JSON.stringify(errorMessage);
          
        //  var tip = new ToolTip({},{text: JSON.stringify(errorMessage)});
        //  tip.show();
      
        }
    );
  }

  loginUser(user){
    firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: user.email,
          password: user.password
        }
      })
      .then(result => JSON.stringify(result))
      .catch(error => console.log(error));
  }

  getCurrentUser(){
    firebase.getCurrentUser()
    .then(user =>{
      console.log("User uid: " + user.uid)
      return user;
    })
    .catch(error => console.log("Trouble in paradise: " + error));
  }

  logout(){
    firebaseWebApi.auth().signOut()
    .then(() => console.log("Logout OK"))
    .catch(error => "Logout error: " + JSON.stringify(error));
  }
}
