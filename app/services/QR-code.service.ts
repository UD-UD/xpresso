import { Injectable } from '@angular/core';

const ZXing = require('nativescript-zxing');
@Injectable()
export class QRCodeService {
    text : any

  constructor() { 
  
  }
  generateQR(text) : any{

    var zx = new ZXing();
    var newImg = zx.createBarcode({encode: this.text,height: 100, width: 100,format: ZXing.QR_CODE});
    return newImg;

  }
}