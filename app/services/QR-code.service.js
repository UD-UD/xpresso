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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVItY29kZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUVItY29kZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRTVDO0lBR0U7SUFFQSxDQUFDO0lBQ0Qsa0NBQVUsR0FBVixVQUFXLElBQUk7UUFFYixJQUFJLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ2pHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFFaEIsQ0FBQztJQVpVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuY29uc3QgWlhpbmcgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtenhpbmcnKTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRUkNvZGVTZXJ2aWNlIHtcbiAgICB0ZXh0IDogYW55XG5cbiAgY29uc3RydWN0b3IoKSB7IFxuICBcbiAgfVxuICBnZW5lcmF0ZVFSKHRleHQpIDogYW55e1xuXG4gICAgdmFyIHp4ID0gbmV3IFpYaW5nKCk7XG4gICAgdmFyIG5ld0ltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe2VuY29kZTogdGhpcy50ZXh0LGhlaWdodDogMTAwLCB3aWR0aDogMTAwLGZvcm1hdDogWlhpbmcuUVJfQ09ERX0pO1xuICAgIHJldHVybiBuZXdJbWc7XG5cbiAgfVxufSJdfQ==