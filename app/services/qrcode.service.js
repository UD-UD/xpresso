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
        return this.barcodeService.scan({
            formats: 'QR_CODE',
            resultDisplayDuration: 500,
            orientation: 'landscape',
            openSettingsIfPermissionWasPreviouslyDenied: true
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBNkQ7QUFDN0QsNENBQThDO0FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLDJEQUE2RDtBQUc3RDtJQUdFLHVCQUFvQixjQUErQjtRQUEvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDakQsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRixtQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLHFCQUFxQixFQUFHLEdBQUc7WUFDM0IsV0FBVyxFQUFHLFdBQVc7WUFDekIsMkNBQTJDLEVBQUcsSUFBSTtTQUNuRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUg7Ozs7O01BS0U7SUFDQSx1Q0FBZSxHQUFmLFVBQWdCLFFBQVE7UUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxHQUFHO1FBQ2hCLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixNQUFNO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF4Q1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUkwQiw0Q0FBYztPQUh4QyxhQUFhLENBeUN6QjtJQUFELG9CQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmNvbnN0IFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XHJcblxyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFFyY29kZVNlcnZpY2Uge1xyXG5cclxuICB6aW5nTGliIDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNlcnZpY2UgOiBCYXJjb2RlU2Nhbm5lcikgeyBcclxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuICAgIHRoaXMuemluZ0xpYiA9IG5ldyBaWGluZygpO1xyXG4gICB9XHJcblxyXG4gIHNjYW5CYXJjb2RlKCkgOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuYmFyY29kZVNlcnZpY2Uuc2Nhbih7XHJcbiAgICAgIGZvcm1hdHMgOidRUl9DT0RFJyxcclxuICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uIDogNTAwLFxyXG4gICAgICBvcmllbnRhdGlvbiA6ICdsYW5kc2NhcGUnLFxyXG4gICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkIDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4vKlxyXG51c2VyRGF0YSA9IHtcclxuICBuYW1lIDogXCJcIixcclxuICB1aWQgIDogXCJcIlxyXG59XHJcbiovXHJcbiAgZ2VuZXJhdGVCYXJjb2RlKHVzZXJEYXRhKXtcclxuICAgIHZhciBpbWcgPSB0aGlzLnppbmdMaWIuY3JlYXRlQmFyY29kZSh7XHJcbiAgICAgIGVuY29kZTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLCBcclxuICAgICAgaGVpZ2h0OiAxMDAsIFxyXG4gICAgICB3aWR0aDogMTAwLCBcclxuICAgICAgZm9ybWF0OiBaWGluZy5RUl9DT0RFfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldGJhc2U2NGltYWdlKGltZyk7XHJcbiAgfVxyXG5cclxuICBnZXRiYXNlNjRpbWFnZShpbWcpe1xyXG4gICAgdmFyIGltYWdlID0gaW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWcpO1xyXG4gICAgbGV0IGJhc2U2NFN0cmluZyA9IGltYWdlLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpOyBcclxuICAgIHJldHVybiBiYXNlNjRTdHJpbmc7XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZUZyb21iYXNlNjQoYmFzZTY0KXtcclxuICAgIHJldHVybiBpbWFnZVNvdXJjZS5mcm9tQmFzZTY0KGJhc2U2NCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==