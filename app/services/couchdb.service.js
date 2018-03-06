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
            console.log(i);
            console.log(JSON.stringify(rows[i]));
        }
        return rows;
    };
    CouchdbService.prototype.setUserData = function (userdata) {
        if (this.getCouchData().length == 0)
            console.log(this.createUserDataEntry(userdata));
        else {
            this.getCouchData();
        }
    };
    CouchdbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CouchdbService);
    return CouchdbService;
}());
exports.CouchdbService = CouchdbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUtuRDtJQUlFO1FBREEsa0JBQWEsR0FBRyxlQUFlLENBQUM7SUFDaEIsQ0FBQztJQUVULGtDQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztZQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87Z0JBQ3JFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCLFVBQTRCLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbEMsVUFBVSxFQUFHLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxRQUFtQjtRQUM3QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FDSixDQUFDO1lBQ0EsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDUCxDQUFDO0lBekNVLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTs7T0FDQSxjQUFjLENBMEMxQjtJQUFELHFCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY291Y2hiYXNlXCI7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSBcIi4uL21vZGVsL1VzZXJEYXRhXCI7XHJcbmltcG9ydCB7IFRvYXN0eSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdHknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ291Y2hkYlNlcnZpY2Uge1xyXG5cclxuICBkYXRhYmFzZSA6IENvdWNoYmFzZSA7XHJcbiAgREFUQUJBU0VfTkFNRSA9IFwidXNlci1kYXRhYmFzZVwiO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHByaXZhdGUgaW5pdENvdWNoKCkgOiB2b2lkIHtcclxuICAgIGlmKHRoaXMuZGF0YWJhc2UgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UodGhpcy5EQVRBQkFTRV9OQU1FKTsgLy9jcmVhdGUgZGIgaWYgbm90IHByZXNlbnQgb3IgZ2V0aW5zdGFuY2VcclxuICAgICAgdGhpcy5kYXRhYmFzZS5jcmVhdGVWaWV3KFwiZ2V0VXNlckRhdGFcIiwgXCIxXCIsIGZ1bmN0aW9uKGRvY3VtZW50LCBlbWl0dGVyKSB7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQudXNlcmRhdGEpIHtcclxuICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEgOiBVc2VyRGF0YSkgOiBOdW1iZXIge1xyXG4gICAgdGhpcy5pbml0Q291Y2goKTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KHtcclxuICAgICAgXCJ1c2VyZGF0YVwiIDogdXNlcmRhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBnZXRDb3VjaERhdGEoKSB7XHJcbiAgICAgdGhpcy5pbml0Q291Y2goKTtcclxuICAgICBsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KFwiZ2V0VXNlckRhdGFcIik7XHJcbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgIGNvbnNvbGUubG9nKGkpXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocm93c1tpXSkpO1xyXG4gICAgIH1cclxuICAgICByZXR1cm4gcm93cztcclxuICB9XHJcblxyXG4gIHNldFVzZXJEYXRhKHVzZXJkYXRhIDogVXNlckRhdGEpe1xyXG4gICAgaWYodGhpcy5nZXRDb3VjaERhdGEoKS5sZW5ndGggPT0gMCkgLy8gbmV3IHVzZXJcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICB0aGlzLmdldENvdWNoRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICB9XHJcbn1cclxuIl19