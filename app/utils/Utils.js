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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE2RDtBQUU3RDtJQUFBO0lBcUJBLENBQUM7SUFuQlUsWUFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFTLEdBQWhCLFVBQWlCLElBQXdCO1FBQXhCLHFCQUFBLEVBQUEsMEJBQXdCO1FBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwwQkFBb0IsR0FBM0IsVUFBNEIsS0FBSztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sNkJBQXVCLEdBQTlCLFVBQStCLE1BQU07UUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW1hZ2VTb3VyY2UgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCI7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG5cbiAgICBzdGF0aWMgZ2V0VWlkKCkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyByZWFkSW1hZ2UocGF0aD1cIn4vaWNvbnMvaW1nLTkucG5nXCIpe1xuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2UuZnJvbUZpbGUocGF0aCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlQmFzZTY0U3RyaW5nKGltYWdlKXtcbiAgICAgICAgcmV0dXJuIGltYWdlLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZUltYWdlRnJvbUJhc2U2NChiYXNlNjQpe1xuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2UuZnJvbUJhc2U2NChiYXNlNjQpO1xuICAgIH1cblxufSJdfQ==