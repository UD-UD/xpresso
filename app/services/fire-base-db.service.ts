import { Injectable } from '@angular/core';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';

const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

@Injectable()
export class FireBaseDbService {

  public logs : any
  public currUser : any
  public userId : any
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

  registerUser(user) : any {
    console.log(JSON.stringify(user));
    return firebase.createUser(user);
  }

  loginUser(user) : any{
    return firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: user.email,
          password: user.password
        }
      })

  }

  getCurrentUser() :any {
    return firebase.getCurrentUser()
    .then(user =>{
      console.log("User uid: " + user.uid)
      return user;
    })
    .catch(error => console.log("Trouble in paradise: " + error));
  }

  getUserid() : any
  {
    return this.getCurrentUser().uid;
  }

  setUser(user)
  {
    var usersRef = firebase.child(this.userId);
    usersRef.set({
      user
    })
  }

  logout(){
    firebaseWebApi.auth().signOut()
    .then(() => console.log("Logout OK"))
    .catch(error => "Logout error: " + JSON.stringify(error));
  }
}
