
import { Injectable } from '@angular/core';
var couchbaseModule = require("nativescript-couchbase");


@Injectable()
export class CouchbaseDbService {
    public database : any
    public documentId : any
    
  constructor() { 
    
  }
  createDB() : void{
    this.database = new couchbaseModule.Couchbase("test-database");
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
console.log(this.documentId);
  }




  }

