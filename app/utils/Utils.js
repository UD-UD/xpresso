"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imageSource = require("tns-core-modules/image-source");
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
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE2RDtBQUU3RDtJQUFBO0lBcUJBLENBQUM7SUFuQlUsWUFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFTLEdBQWhCLFVBQWlCLElBQXdCO1FBQXhCLHFCQUFBLEVBQUEsMEJBQXdCO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwwQkFBb0IsR0FBM0IsVUFBNEIsS0FBSztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sNkJBQXVCLEdBQTlCLFVBQStCLE1BQU07UUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIHN0YXRpYyBnZXRVaWQoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVhZEltYWdlKHBhdGg9XCJ+L2ljb25zL2ltZy05LnBuZ1wiKXtcclxuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2UuZnJvbUZpbGUocGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlQmFzZTY0U3RyaW5nKGltYWdlKXtcclxuICAgICAgICByZXR1cm4gaW1hZ2UudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlSW1hZ2VGcm9tQmFzZTY0KGJhc2U2NCl7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlU291cmNlLmZyb21CYXNlNjQoYmFzZTY0KTtcclxuICAgIH1cclxuXHJcbn0iXX0=