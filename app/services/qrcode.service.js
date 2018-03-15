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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBNkQ7QUFDN0QsNENBQThDO0FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDLDJEQUE2RDtBQUc3RDtJQUdFLHVCQUFvQixjQUErQjtRQUEvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDakQsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRixtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIscUJBQXFCLEVBQUcsR0FBRztZQUMzQixXQUFXLEVBQUcsV0FBVztZQUN6QiwyQ0FBMkMsRUFBRyxJQUFJO1NBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLFVBQUMsWUFBWTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVIOzs7OztNQUtFO0lBQ0EsdUNBQWUsR0FBZixVQUFnQixRQUFRO1FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsR0FBRztRQUNoQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsTUFBTTtRQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBN0NVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJMEIsNENBQWM7T0FIeEMsYUFBYSxDQThDekI7SUFBRCxvQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5jb25zdCBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xuXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFFyY29kZVNlcnZpY2Uge1xuXG4gIHppbmdMaWIgOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNlcnZpY2UgOiBCYXJjb2RlU2Nhbm5lcikgeyBcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgdGhpcy56aW5nTGliID0gbmV3IFpYaW5nKCk7XG4gICB9XG5cbiAgc2NhbkJhcmNvZGUoKSB7XG4gICAgdGhpcy5iYXJjb2RlU2VydmljZS5zY2FuKHtcbiAgICAgIGZvcm1hdHMgOidRUl9DT0RFJyxcbiAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbiA6IDUwMCxcbiAgICAgIG9yaWVudGF0aW9uIDogJ2xhbmRzY2FwZScsXG4gICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkIDogdHJ1ZVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbi8qXG51c2VyRGF0YSA9IHtcbiAgbmFtZSA6IFwiXCIsXG4gIHVpZCAgOiBcIlwiXG59XG4qL1xuICBnZW5lcmF0ZUJhcmNvZGUodXNlckRhdGEpe1xuICAgIHZhciBpbWcgPSB0aGlzLnppbmdMaWIuY3JlYXRlQmFyY29kZSh7XG4gICAgICBlbmNvZGU6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgXG4gICAgICBoZWlnaHQ6IDEwMCwgXG4gICAgICB3aWR0aDogMTAwLCBcbiAgICAgIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0YmFzZTY0aW1hZ2UoaW1nKTtcbiAgfVxuXG4gIGdldGJhc2U2NGltYWdlKGltZyl7XG4gICAgdmFyIGltYWdlID0gaW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShpbWcpO1xuICAgIGxldCBiYXNlNjRTdHJpbmcgPSBpbWFnZS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKTtcbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xuICB9XG5cbiAgZ2V0SW1hZ2VGcm9tYmFzZTY0KGJhc2U2NCl7XG4gICAgcmV0dXJuIGltYWdlU291cmNlLmZyb21CYXNlNjQoYmFzZTY0KTtcbiAgfVxufVxuIl19