import { Injectable } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import * as camera from "nativescript-camera";
const ZXing = require('nativescript-zxing')

@Injectable()
export class QrcodeService {

  zingLib : any;
  constructor(private barcodeService : BarcodeScanner) { 
    camera.requestPermissions();
    this.zingLib = new ZXing();
   }

  scanBarcode() {
    this.barcodeService.scan({
      formats :'QR_CODE',
      resultDisplayDuration : 500,
      orientation : 'landscape',
      openSettingsIfPermissionWasPreviouslyDenied : true
    }).then((result) => {
       console.log(JSON.stringify(result));
      }, (errorMessage) => {
        console.log("No scan. " + errorMessage);
      }
    );
  }

/*
userData = {
  name : "",
  uid  : ""
}
*/
  generateBarcode(userData){
    var img = this.zingLib.createBarcode({
      encode: JSON.stringify(userData), 
      height: 100, 
      width: 100, 
      format: ZXing.QR_CODE});
      return img;
  }
}
