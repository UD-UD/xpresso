import { Injectable } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import * as camera from "nativescript-camera";

@Injectable()
export class QrcodeService {

  
  constructor(private barcodeService : BarcodeScanner) { 
    camera.requestPermissions();
   }

  scanBarcode() {
    this.barcodeService.scan({
      formats :'QR_CODE',
      resultDisplayDuration : 500,
      orientation : 'portrait',
      openSettingsIfPermissionWasPreviouslyDenied : true
    }).then((result) => {
       console.log(JSON.stringify(result));
      }, (errorMessage) => {
        console.log("No scan. " + errorMessage);
      }
    );
  }

}
