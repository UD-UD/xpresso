"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZXing = require('nativescript-zxing');
var QRCodeService = /** @class */ (function () {
    function QRCodeService() {
    }
    QRCodeService.prototype.generateQR = function (text) {
        var zx = new ZXing();
        var newImg = zx.createBarcode({ encode: this.text, height: 100, width: 100, format: ZXing.QR_CODE });
        return newImg;
    };
    QRCodeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QRCodeService);
    return QRCodeService;
}());
exports.QRCodeService = QRCodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVItY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUVItY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDO0lBR0U7SUFFQSxDQUFDO0lBQ0Qsa0NBQVUsR0FBVixVQUFXLElBQUk7UUFFYixJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ2pHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFFaEIsQ0FBQztJQVpVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IFpYaW5nID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXp4aW5nJyk7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFFSQ29kZVNlcnZpY2Uge1xyXG4gICAgdGV4dCA6IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgXHJcbiAgfVxyXG4gIGdlbmVyYXRlUVIodGV4dCkgOiBhbnl7XHJcblxyXG4gICAgdmFyIHp4ID0gbmV3IFpYaW5nKCk7XHJcbiAgICB2YXIgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiB0aGlzLnRleHQsaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAsZm9ybWF0OiBaWGluZy5RUl9DT0RFfSk7XHJcbiAgICByZXR1cm4gbmV3SW1nO1xyXG5cclxuICB9XHJcbn0iXX0=