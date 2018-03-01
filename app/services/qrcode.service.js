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
            height: 500,
            width: 500,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXJjb2RlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxcmNvZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywyRUFBNkQ7QUFDN0QsNENBQThDO0FBQzlDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRzNDO0lBR0UsdUJBQW9CLGNBQStCO1FBQS9CLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUNqRCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVGLG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixPQUFPLEVBQUUsU0FBUztZQUNsQixxQkFBcUIsRUFBRyxHQUFHO1lBQzNCLFdBQVcsRUFBRyxXQUFXO1lBQ3pCLDJDQUEyQyxFQUFHLElBQUk7U0FDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUg7Ozs7O01BS0U7SUFDQSx1Q0FBZSxHQUFmLFVBQWdCLFFBQVE7UUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDbkMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFuQ1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUkwQiw0Q0FBYztPQUh4QyxhQUFhLENBb0N6QjtJQUFELG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcic7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmNvbnN0IFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJylcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFFyY29kZVNlcnZpY2Uge1xuXG4gIHppbmdMaWIgOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNlcnZpY2UgOiBCYXJjb2RlU2Nhbm5lcikgeyBcbiAgICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICAgdGhpcy56aW5nTGliID0gbmV3IFpYaW5nKCk7XG4gICB9XG5cbiAgc2NhbkJhcmNvZGUoKSB7XG4gICAgdGhpcy5iYXJjb2RlU2VydmljZS5zY2FuKHtcbiAgICAgIGZvcm1hdHMgOidRUl9DT0RFJyxcbiAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbiA6IDUwMCxcbiAgICAgIG9yaWVudGF0aW9uIDogJ2xhbmRzY2FwZScsXG4gICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkIDogdHJ1ZVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbi8qXG51c2VyRGF0YSA9IHtcbiAgbmFtZSA6IFwiXCIsXG4gIHVpZCAgOiBcIlwiXG59XG4qL1xuICBnZW5lcmF0ZUJhcmNvZGUodXNlckRhdGEpe1xuICAgIHZhciBpbWcgPSB0aGlzLnppbmdMaWIuY3JlYXRlQmFyY29kZSh7XG4gICAgICBlbmNvZGU6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSwgXG4gICAgICBoZWlnaHQ6IDUwMCwgXG4gICAgICB3aWR0aDogNTAwLCBcbiAgICAgIGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xuICAgICAgcmV0dXJuIGltZztcbiAgfVxufVxuIl19