import { Injectable } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import * as camera from "nativescript-camera";
const ZXing = require('nativescript-zxing');

import * as imageSource from "tns-core-modules/image-source";

@Injectable()
export class QrcodeService {

  zingLib : any;
  constructor(private barcodeService : BarcodeScanner) { 
    camera.requestPermissions();
    this.zingLib = new ZXing();
   }

  scanBarcode() : any {
    return this.barcodeService.scan({
      formats :'QR_CODE',
      resultDisplayDuration : 500,
      orientation : 'landscape',
      openSettingsIfPermissionWasPreviouslyDenied : true
    })
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
      return this.getbase64image(img);
  }

  getbase64image(img){
    var image = imageSource.fromNativeSource(img);
    let base64String = image.toBase64String("png"); 
    return base64String;
  }

  getImageFrombase64(base64){
    return imageSource.fromBase64(base64);
  }
}
