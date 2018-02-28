import { Injectable } from '@angular/core';

const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
@Injectable()
export class FireBaseDbService {

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
        },
        function (errorMessage) {
          console.log(JSON.stringify(errorMessage));
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
