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
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i]);
        }
        return rows;
    };
    CouchdbService.prototype.setUserData = function (userdata) {
        if (this.getCouchData().length == 0)
            console.log(this.createUserDataEntry(userdata));
        this.getCouchData();
    };
    CouchdbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchdbService);
    return CouchdbService;
}());
exports.CouchdbService = CouchdbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUluRDtJQUlFO1FBREEsa0JBQWEsR0FBRyxlQUFlLENBQUM7SUFDaEIsQ0FBQztJQUVULGtDQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztZQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87Z0JBQ3JFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCLFVBQTRCLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbEMsVUFBVSxFQUFHLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQXJDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQXNDMUI7SUFBRCxxQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSBcIi4uL21vZGVsL1VzZXJEYXRhXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb3VjaGRiU2VydmljZSB7XG5cbiAgZGF0YWJhc2UgOiBDb3VjaGJhc2UgO1xuICBEQVRBQkFTRV9OQU1FID0gXCJ1c2VyLWRhdGFiYXNlXCI7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSBpbml0Q291Y2goKSA6IHZvaWQge1xuICAgIGlmKHRoaXMuZGF0YWJhc2UgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKHRoaXMuREFUQUJBU0VfTkFNRSk7IC8vY3JlYXRlIGRiIGlmIG5vdCBwcmVzZW50IG9yIGdldGluc3RhbmNlXG4gICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJnZXRVc2VyRGF0YVwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQudXNlcmRhdGEpIHtcbiAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVc2VyRGF0YUVudHJ5KHVzZXJkYXRhIDogVXNlckRhdGEpIDogTnVtYmVyIHtcbiAgICB0aGlzLmluaXRDb3VjaCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KHtcbiAgICAgIFwidXNlcmRhdGFcIiA6IHVzZXJkYXRhXG4gICAgfSk7XG4gIH1cbiAgXG4gIGdldENvdWNoRGF0YSgpIHtcbiAgICAgdGhpcy5pbml0Q291Y2goKTtcbiAgICAgbGV0IHJvd3MgPSB0aGlzLmRhdGFiYXNlLmV4ZWN1dGVRdWVyeShcImdldFVzZXJEYXRhXCIpO1xuICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3dzW2ldKTtcbiAgICAgfVxuICAgICByZXR1cm4gcm93cztcbiAgfVxuXG4gIHNldFVzZXJEYXRhKHVzZXJkYXRhIDogVXNlckRhdGEpe1xuICAgIGlmKHRoaXMuZ2V0Q291Y2hEYXRhKCkubGVuZ3RoID09IDApIC8vIG5ldyB1c2VyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3JlYXRlVXNlckRhdGFFbnRyeSh1c2VyZGF0YSkpO1xuICAgIHRoaXMuZ2V0Q291Y2hEYXRhKCk7XG4gIH1cbn1cbiJdfQ==