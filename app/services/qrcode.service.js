"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var camera = require("nativescript-camera");
var ZXing = require('nativescript-zxing');
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
        return img;
    };
    QrcodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], QrcodeService);
    return QrcodeService;
}());
exports.QrcodeService = QrcodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBNkQ7QUFDN0QsNENBQThDO0FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRzNDO0lBR0UsdUJBQW9CLGNBQStCO1FBQS9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUNqRCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVGLG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixPQUFPLEVBQUUsU0FBUztZQUNsQixxQkFBcUIsRUFBRyxHQUFHO1lBQzNCLFdBQVcsRUFBRyxXQUFXO1lBQ3pCLDJDQUEyQyxFQUFHLElBQUk7U0FDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUg7Ozs7O01BS0U7SUFDQSx1Q0FBZSxHQUFmLFVBQWdCLFFBQVE7UUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFuQ1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUkwQiw0Q0FBYztPQUh4QyxhQUFhLENBb0N6QjtJQUFELG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcclxuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XHJcbmNvbnN0IFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJylcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFFyY29kZVNlcnZpY2Uge1xyXG5cclxuICB6aW5nTGliIDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNlcnZpY2UgOiBCYXJjb2RlU2Nhbm5lcikgeyBcclxuICAgIGNhbWVyYS5yZXF1ZXN0UGVybWlzc2lvbnMoKTtcclxuICAgIHRoaXMuemluZ0xpYiA9IG5ldyBaWGluZygpO1xyXG4gICB9XHJcblxyXG4gIHNjYW5CYXJjb2RlKCkge1xyXG4gICAgdGhpcy5iYXJjb2RlU2VydmljZS5zY2FuKHtcclxuICAgICAgZm9ybWF0cyA6J1FSX0NPREUnLFxyXG4gICAgICByZXN1bHREaXNwbGF5RHVyYXRpb24gOiA1MDAsXHJcbiAgICAgIG9yaWVudGF0aW9uIDogJ2xhbmRzY2FwZScsXHJcbiAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQgOiB0cnVlXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJObyBzY2FuLiBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuLypcclxudXNlckRhdGEgPSB7XHJcbiAgbmFtZSA6IFwiXCIsXHJcbiAgdWlkICA6IFwiXCJcclxufVxyXG4qL1xyXG4gIGdlbmVyYXRlQmFyY29kZSh1c2VyRGF0YSl7XHJcbiAgICB2YXIgaW1nID0gdGhpcy56aW5nTGliLmNyZWF0ZUJhcmNvZGUoe1xyXG4gICAgICBlbmNvZGU6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgXHJcbiAgICAgIGhlaWdodDogMTAwLCBcclxuICAgICAgd2lkdGg6IDEwMCwgXHJcbiAgICAgIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xyXG4gICAgICByZXR1cm4gaW1nO1xyXG4gIH1cclxufVxyXG4iXX0=