"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var CouchdbService = /** @class */ (function () {
    function CouchdbService() {
        this.DATABASE_NAME = "user-database";
    }
    CouchdbService.prototype.initCouch = function () {
        if (this.database == undefined) {
            this.database = new nativescript_couchbase_1.Couchbase(this.DATABASE_NAME); //create db if not present or getinstance
            this.database.createView("getUserData", "1", function (document, emitter) {
                if (document.userdata) {
                    emitter.emit(document._id, document);
                }
            });
        }
    };
    CouchdbService.prototype.createUserDataEntry = function (userdata) {
        this.initCouch();
        return this.database.createDocument({
            "userdata": userdata
        });
    };
    CouchdbService.prototype.getCouchData = function () {
        this.initCouch();
        var rows = this.database.executeQuery("getUserData");
        return rows;
    };
    CouchdbService.prototype.setUserData = function (userdata) {
        if (this.getCouchData().length == 0)
            console.log(this.createUserDataEntry(userdata));
        else {
            this.getCouchData();
        }
    };
    CouchdbService.prototype.checkLoggedInStatus = function () {
        this.initCouch();
        var rows = this.getCouchData();
        if (rows.length != 0) {
            if (rows[0].userdata) {
                return rows[0].userdata.isLoggedIn ? true : false;
            }
        }
        else
            return false;
    };
    CouchdbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchdbService);
    return CouchdbService;
}());
exports.CouchdbService = CouchdbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUtuRDtJQUtFO1FBRkEsa0JBQWEsR0FBRyxlQUFlLENBQUM7SUFFaEIsQ0FBQztJQUVULGtDQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztZQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87Z0JBQ3JFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCLFVBQTRCLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbEMsVUFBVSxFQUFHLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQ0osQ0FBQztZQUNBLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSTtZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQW5EVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQW9EMUI7SUFBRCxxQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gXCIuLi9tb2RlbC9Vc2VyRGF0YVwiO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvdWNoZGJTZXJ2aWNlIHtcclxuXHJcbiAgZGF0YWJhc2UgOiBDb3VjaGJhc2UgO1xyXG4gIERBVEFCQVNFX05BTUUgPSBcInVzZXItZGF0YWJhc2VcIjtcclxuICB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHByaXZhdGUgaW5pdENvdWNoKCkgOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuZGF0YWJhc2UgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UodGhpcy5EQVRBQkFTRV9OQU1FKTsgLy9jcmVhdGUgZGIgaWYgbm90IHByZXNlbnQgb3IgZ2V0aW5zdGFuY2VcclxuICAgICAgdGhpcy5kYXRhYmFzZS5jcmVhdGVWaWV3KFwiZ2V0VXNlckRhdGFcIiwgXCIxXCIsIGZ1bmN0aW9uKGRvY3VtZW50LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQudXNlcmRhdGEpIHtcclxuICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEgOiBVc2VyRGF0YSkgOiBOdW1iZXIge1xyXG4gICAgdGhpcy5pbml0Q291Y2goKTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KHtcclxuICAgICAgXCJ1c2VyZGF0YVwiIDogdXNlcmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBnZXRDb3VjaERhdGEoKSB7XHJcbiAgICAgdGhpcy5pbml0Q291Y2goKTtcclxuICAgICBsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KFwiZ2V0VXNlckRhdGFcIik7XHJcbiAgICAgcmV0dXJuIHJvd3M7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyRGF0YSh1c2VyZGF0YSA6IFVzZXJEYXRhKXtcclxuICAgIGlmKHRoaXMuZ2V0Q291Y2hEYXRhKCkubGVuZ3RoID09IDApIC8vIG5ldyB1c2VyXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jcmVhdGVVc2VyRGF0YUVudHJ5KHVzZXJkYXRhKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgdGhpcy5nZXRDb3VjaERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0xvZ2dlZEluU3RhdHVzKCkgOiBib29sZWFueyBcclxuICAgIHRoaXMuaW5pdENvdWNoKCk7XHJcbiAgICBsZXQgcm93cyA9IHRoaXMuZ2V0Q291Y2hEYXRhKCk7XHJcbiAgICBpZihyb3dzLmxlbmd0aCAhPSAwKXtcclxuICAgICAgaWYocm93c1swXS51c2VyZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHJvd3NbMF0udXNlcmRhdGEuaXNMb2dnZWRJbiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBcclxuICB9XHJcbn1cclxuIl19