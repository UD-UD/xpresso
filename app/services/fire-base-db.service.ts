import { Injectable } from '@angular/core';
import { alert } from 'tns-core-modules/ui/dialogs/dialogs';

const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

@Injectable()
export class FireBaseDbService {

  public logs : any
  public currUser : any
  public userId : any
  public isOnline : any;
  constructor() {
    this.initfirebase();
  }

  initfirebase(){
    firebase.init({}).then(()=>{
      console.log('FireBase Initialized');
    });
  }

  getData(ref : string): any{
  return  firebase.getValue(ref)
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

addFriend(friendId , friend, user)
  {
    firebase.update('/users/'+ user+'/messages/'+friendId, 
  
   friend
  
  )

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
  //  var userRef = firebase.object('/'+user.firebaseID).set(user)
  firebase.update('/users/'+ user.firebaseID, user)
  }
  
  logout(){
    firebaseWebApi.auth().signOut()
    .then(() => console.log("Logout OK"))
    .catch(error => "Logout error: " + JSON.stringify(error));
  }
}
