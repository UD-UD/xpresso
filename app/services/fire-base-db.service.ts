import { Injectable } from '@angular/core';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';
import { Constants } from './constant';
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

@Injectable()
export class FireBaseDbService {

  public logs : any
  public currUser : any
  public userId : string
  public isOnline : any;

  asyncData : Observable;

  constructor() {
    this.initfirebase();
    this.asyncData = new Observable();
    this.asyncData.set(Constants.TRACKER_FRIEND_ADDED,"false");
  }

  initfirebase(){
   // let _that = this;
    firebase.init({

      onAuthStateChanged: data => { // optional but useful to immediately re-logon the user when he re-visits your app
      console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
      if (data.loggedIn) {
        this.userId = data.user.uid;
        console.log("user's email address: " + (JSON.stringify(data.user)));
        console.log(this.userId);
        this.addListerners();
      }
      }}).then(function(){
        console.log("Firebase Initialized")
       } )
  }

addListerners() : void{
  let pathMessage = Constants.USERS+this.userId+Constants.MESSAGES
  console.log(pathMessage)
  firebase.addChildEventListener(this.onChildEvent, pathMessage).then(
    function(listenerWrapper) {
      var path = listenerWrapper.path;
      var listeners = listenerWrapper.listeners; // an Array of listeners added
      // you can store the wrapper somewhere to later call 'removeEventListeners'
    }
  );
}

  getData(ref : string): any{
    return  firebase.getValue(ref)
  }

  triggerTracker(tackerName) : void{
      if(this.asyncData.get(tackerName) == "false"){
        this.asyncData.set(tackerName,"true");
      }
      else{
        this.asyncData.set(tackerName,"false");
      }
    }

  getTracker(){
    return this.asyncData;
  }

  registerUser(user) : any {
     console.log(JSON.stringify(user));
     return firebase.createUser(user);
   // this.showUId();
  }
  showUId() : void
  {
    console.log(this.userId)
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

    // if(this.userId == undefined){
    //   return firebase.getCurrentUser().then(result => {
    //        this.userId = JSON.stringify(result.value);
    //       return this.userId;
    //     }).catch(error=>console.log("Error- cuurent user"));
    // }
    // else{
    //   return this.userId;
    // }
  }

  setUser(user)
  {
    let path = Constants.USERS +  user.firebaseID;
    firebase.update(path, user)
  }

  logout(){
    firebaseWebApi.auth().signOut()
    .then(() => console.log("Logout OK"))
    .catch(error => "Logout error: " + JSON.stringify(error));
  }

  addFriend(friendId , friend, userId)
  {
    let path = Constants.USERS + userId + Constants.MESSAGES +friendId;
    firebase.update(path, friend)
    this.triggerTracker(Constants.TRACKER_FRIEND_ADDED);
  }

  checkFriendAndAdd(friendId , friend, userId){
    let path = Constants.USERS +userId+ Constants.MESSAGES + friendId;
    console.log("hi")
    console.log(path)
    this.getData(path)

    .then(result => {
      if(result.value!= null){
        console.log(JSON.stringify(result.value))
        console.log("friend already added")
      }
      else
      {
        this.addFriend(friendId , friend, userId)
        console.log(friendId)
        console.log(userId)
      }
    })
    .catch(error => console.log("Error: " + error));
  }
   onChildEvent(result) {
    console.log("Event type: " + result.type);
    console.log("Key: " + result.key);
    console.log("Value: " + JSON.stringify(result.value));
  };

  // listen to changes in the /users path

}
