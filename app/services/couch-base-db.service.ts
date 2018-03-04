
import { Injectable } from '@angular/core';
var couchbaseModule = require("nativescript-couchbase");


@Injectable()
export class CouchbaseDbService {
    public database : any
 
    public documentId :any
  //  public profile : any
    
  constructor() { 
    this.database = new couchbaseModule.Couchbase("data");
  
  }
  createDB(profile) : any{
 
   this.documentId = this.database.createDocument(profile)
console.log(JSON.stringify(this.documentId));
return this.documentId;
  }
  getDoc(docId) : any{
  return(this.database.getDocument(docId));
  }
  updateDoc(docId): any {
  return  this.database.updateDocument(this.documentId, {
      firstname: "Nicolas",
      lastname: "Raboy"
     
  });

  }


  }

