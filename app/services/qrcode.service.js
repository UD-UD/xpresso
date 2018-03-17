"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var camera = require("nativescript-camera");
var ZXing = require('nativescript-zxing');
var imageSource = require("tns-core-modules/image-source");
var QrcodeService = /** @class */ (function () {
    function QrcodeService(barcodeService) {
        this.barcodeService = barcodeService;
        camera.requestPermissions();
        this.zingLib = new ZXing();
    }
    QrcodeService.prototype.scanBarcode = function () {
        this.barcodeService.scan({
            formats: 'QR_CODE',
            resultDisplayDuration: 500,
            orientation: 'landscape',
            openSettingsIfPermissionWasPreviouslyDenied: true
        }).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (errorMessage) {
            console.log("No scan. " + errorMessage);
        });
    };
    /*
    userData = {
      name : "",
      uid  : ""
    }
    */
    QrcodeService.prototype.generateBarcode = function (userData) {
        var img = this.zingLib.createBarcode({
            encode: JSON.stringify(userData),
            height: 100,
            width: 100,
            format: ZXing.QR_CODE
        });
        return this.getbase64image(img);
    };
    QrcodeService.prototype.getbase64image = function (img) {
        var image = imageSource.fromNativeSource(img);
        var base64String = image.toBase64String("png");
        return base64String;
    };
    QrcodeService.prototype.getImageFrombase64 = function (base64) {
        return imageSource.fromBase64(base64);
    };
    QrcodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], QrcodeService);
    return QrcodeService;
}());
exports.QrcodeService = QrcodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBNkQ7QUFDN0QsNENBQThDO0FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLDJEQUE2RDtBQUc3RDtJQUdFLHVCQUFvQixjQUErQjtRQUEvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDakQsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIscUJBQXFCLEVBQUcsR0FBRztZQUMzQixXQUFXLEVBQUcsV0FBVztZQUN6QiwyQ0FBMkMsRUFBRyxJQUFJO1NBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLFVBQUMsWUFBWTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVIOzs7OztNQUtFO0lBQ0EsdUNBQWUsR0FBZixVQUFnQixRQUFRO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsR0FBRztRQUNoQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsTUFBTTtRQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBN0NVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJMEIsNENBQWM7T0FIeEMsYUFBYSxDQThDekI7SUFBRCxvQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XHJcbmltcG9ydCAqIGFzIGNhbWVyYSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5jb25zdCBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xyXG5cclxuaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRcmNvZGVTZXJ2aWNlIHtcclxuXHJcbiAgemluZ0xpYiA6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTZXJ2aWNlIDogQmFyY29kZVNjYW5uZXIpIHsgXHJcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XHJcbiAgICB0aGlzLnppbmdMaWIgPSBuZXcgWlhpbmcoKTtcclxuICAgfVxyXG5cclxuICBzY2FuQmFyY29kZSgpIHtcclxuICAgIHRoaXMuYmFyY29kZVNlcnZpY2Uuc2Nhbih7XHJcbiAgICAgIGZvcm1hdHMgOidRUl9DT0RFJyxcclxuICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uIDogNTAwLFxyXG4gICAgICBvcmllbnRhdGlvbiA6ICdsYW5kc2NhcGUnLFxyXG4gICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkIDogdHJ1ZVxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4gXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbi8qXHJcbnVzZXJEYXRhID0ge1xyXG4gIG5hbWUgOiBcIlwiLFxyXG4gIHVpZCAgOiBcIlwiXHJcbn1cclxuKi9cclxuICBnZW5lcmF0ZUJhcmNvZGUodXNlckRhdGEpe1xyXG4gICAgdmFyIGltZyA9IHRoaXMuemluZ0xpYi5jcmVhdGVCYXJjb2RlKHtcclxuICAgICAgZW5jb2RlOiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksIFxyXG4gICAgICBoZWlnaHQ6IDEwMCwgXHJcbiAgICAgIHdpZHRoOiAxMDAsIFxyXG4gICAgICBmb3JtYXQ6IFpYaW5nLlFSX0NPREV9KTtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0YmFzZTY0aW1hZ2UoaW1nKTtcclxuICB9XHJcblxyXG4gIGdldGJhc2U2NGltYWdlKGltZyl7XHJcbiAgICB2YXIgaW1hZ2UgPSBpbWFnZVNvdXJjZS5mcm9tTmF0aXZlU291cmNlKGltZyk7XHJcbiAgICBsZXQgYmFzZTY0U3RyaW5nID0gaW1hZ2UudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XHJcbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2VGcm9tYmFzZTY0KGJhc2U2NCl7XHJcbiAgICByZXR1cm4gaW1hZ2VTb3VyY2UuZnJvbUJhc2U2NChiYXNlNjQpO1xyXG4gIH1cclxufVxyXG4iXX0=