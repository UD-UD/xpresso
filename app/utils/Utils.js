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
    Utils.readImage = function () {
        var path = "~/icons/img-9.png";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUE2RDtBQUU3RDtJQUFBO0lBc0JBLENBQUM7SUFwQlUsWUFBTSxHQUFiO1FBQ0ksTUFBTSxDQUFDLHNDQUFzQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxlQUFTLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDBCQUFvQixHQUEzQixVQUE0QixLQUFLO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSw2QkFBdUIsR0FBOUIsVUFBK0IsTUFBTTtRQUNqQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0Qlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcblxuICAgIHN0YXRpYyBnZXRVaWQoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlYWRJbWFnZSgpe1xuICAgICAgICB2YXIgcGF0aCA9IFwifi9pY29ucy9pbWctOS5wbmdcIjtcbiAgICAgICAgcmV0dXJuIGltYWdlU291cmNlLmZyb21GaWxlKHBhdGgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZUJhc2U2NFN0cmluZyhpbWFnZSl7XG4gICAgICAgIHJldHVybiBpbWFnZS50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVJbWFnZUZyb21CYXNlNjQoYmFzZTY0KXtcbiAgICAgICAgcmV0dXJuIGltYWdlU291cmNlLmZyb21CYXNlNjQoYmFzZTY0KTtcbiAgICB9XG5cbn0iXX0=