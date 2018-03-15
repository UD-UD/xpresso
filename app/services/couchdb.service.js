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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUtuRDtJQUtFO1FBRkEsa0JBQWEsR0FBRyxlQUFlLENBQUM7SUFFaEIsQ0FBQztJQUVULGtDQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztZQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87Z0JBQ3JFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCLFVBQTRCLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbEMsVUFBVSxFQUFHLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQ0osQ0FBQztZQUNBLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSTtZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQW5EVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQW9EMUI7SUFBRCxxQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSBcIi4uL21vZGVsL1VzZXJEYXRhXCI7XG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvdWNoZGJTZXJ2aWNlIHtcblxuICBkYXRhYmFzZSA6IENvdWNoYmFzZSA7XG4gIERBVEFCQVNFX05BTUUgPSBcInVzZXItZGF0YWJhc2VcIjtcbiAgdXNlckRhdGEgOiBVc2VyRGF0YTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwcml2YXRlIGluaXRDb3VjaCgpIDogdm9pZCB7XG4gICAgaWYodGhpcy5kYXRhYmFzZSA9PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UodGhpcy5EQVRBQkFTRV9OQU1FKTsgLy9jcmVhdGUgZGIgaWYgbm90IHByZXNlbnQgb3IgZ2V0aW5zdGFuY2VcbiAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlVmlldyhcImdldFVzZXJEYXRhXCIsIFwiMVwiLCBmdW5jdGlvbihkb2N1bWVudCwgZW1pdHRlcikge1xuICAgICAgICBpZihkb2N1bWVudC51c2VyZGF0YSkge1xuICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEgOiBVc2VyRGF0YSkgOiBOdW1iZXIge1xuICAgIHRoaXMuaW5pdENvdWNoKCk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgXCJ1c2VyZGF0YVwiIDogdXNlcmRhdGFcbiAgICB9KTtcbiAgfVxuICBcbiAgZ2V0Q291Y2hEYXRhKCkge1xuICAgICB0aGlzLmluaXRDb3VjaCgpO1xuICAgICBsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KFwiZ2V0VXNlckRhdGFcIik7XG4gICAgIHJldHVybiByb3dzO1xuICB9XG5cbiAgc2V0VXNlckRhdGEodXNlcmRhdGEgOiBVc2VyRGF0YSl7XG4gICAgaWYodGhpcy5nZXRDb3VjaERhdGEoKS5sZW5ndGggPT0gMCkgLy8gbmV3IHVzZXJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jcmVhdGVVc2VyRGF0YUVudHJ5KHVzZXJkYXRhKSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgdGhpcy5nZXRDb3VjaERhdGEoKTtcbiAgICAgICAgfVxuICB9XG5cbiAgY2hlY2tMb2dnZWRJblN0YXR1cygpIDogYm9vbGVhbnsgXG4gICAgdGhpcy5pbml0Q291Y2goKTtcbiAgICBsZXQgcm93cyA9IHRoaXMuZ2V0Q291Y2hEYXRhKCk7XG4gICAgaWYocm93cy5sZW5ndGggIT0gMCl7XG4gICAgICBpZihyb3dzWzBdLnVzZXJkYXRhKXtcbiAgICAgICAgcmV0dXJuIHJvd3NbMF0udXNlcmRhdGEuaXNMb2dnZWRJbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIFxuICB9XG59XG4iXX0=