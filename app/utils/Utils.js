"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageSource = require("tns-core-modules/image-source");
var nativescript_toasty_1 = require("nativescript-toasty");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getUid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Utils.readImage = function (path) {
        if (path === void 0) { path = "~/icons/img-9.png"; }
        return imageSource.fromFile(path);
    };
    Utils.generateBase64String = function (image) {
        return image.toBase64String("png");
    };
    Utils.generateImageFromBase64 = function (base64) {
        return imageSource.fromBase64(base64);
    };
    Utils.generateToast = function (message) {
        var toast = new nativescript_toasty_1.Toasty(message);
        toast.show();
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE2RDtBQUM3RCwyREFBMEM7QUFFMUM7SUFBQTtJQTBCQSxDQUFDO0lBeEJVLFlBQU0sR0FBYjtRQUNJLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZUFBUyxHQUFoQixVQUFpQixJQUF3QjtRQUF4QixxQkFBQSxFQUFBLDBCQUF3QjtRQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sMEJBQW9CLEdBQTNCLFVBQTRCLEtBQUs7UUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLDZCQUF1QixHQUE5QixVQUErQixNQUFNO1FBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDYSxtQkFBYSxHQUEzQixVQUE0QixPQUFPO1FBRW5DLElBQU0sS0FBSyxHQUFHLElBQUksNEJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHtUb2FzdHl9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknXHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIHN0YXRpYyBnZXRVaWQoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVhZEltYWdlKHBhdGg9XCJ+L2ljb25zL2ltZy05LnBuZ1wiKXtcclxuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2UuZnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlQmFzZTY0U3RyaW5nKGltYWdlKXtcclxuICAgICAgICByZXR1cm4gaW1hZ2UudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlSW1hZ2VGcm9tQmFzZTY0KGJhc2U2NCl7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlU291cmNlLmZyb21CYXNlNjQoYmFzZTY0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVUb2FzdChtZXNzYWdlKSA6IHZvaWRcclxuICAgIHtcclxuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShtZXNzYWdlKTtcclxuICAgICB0b2FzdC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG59Il19