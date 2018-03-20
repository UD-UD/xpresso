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
        if (this.getCouchData().length == 0) {
            console.log(this.createUserDataEntry(userdata));
            //  this.DocId = this.createUserDataEntry(userdata)
        }
        else {
            this.getCouchData();
        }
    };
    CouchdbService.prototype.updateUserData = function (docId, userdata) {
        this.database.updateDocument(docId, { "userdata": userdata });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291Y2hkYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY291Y2hkYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLGlFQUFtRDtBQUtuRDtJQU1FO1FBSEEsa0JBQWEsR0FBRyxlQUFlLENBQUM7SUFHaEIsQ0FBQztJQUVULGtDQUFTLEdBQWpCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztZQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87Z0JBQ3JFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRU8sNENBQW1CLEdBQTNCLFVBQTRCLFFBQW1CO1FBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDbEMsVUFBVSxFQUFHLFFBQVE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNmLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksUUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FDbkMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEQsbURBQW1EO1FBQ3JELENBQUM7UUFDRyxJQUFJLENBQ0osQ0FBQztZQUNBLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUUsUUFBbUI7UUFFdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFJLEVBQUMsVUFBVSxFQUFHLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ25CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSTtZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQTVEVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7O09BQ0EsY0FBYyxDQTZEMUI7SUFBRCxxQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gXCIuLi9tb2RlbC9Vc2VyRGF0YVwiO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvdWNoZGJTZXJ2aWNlIHtcclxuXHJcbiAgZGF0YWJhc2UgOiBDb3VjaGJhc2UgO1xyXG4gIERBVEFCQVNFX05BTUUgPSBcInVzZXItZGF0YWJhc2VcIjtcclxuICB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gIERvY0lkIDogTnVtYmVyXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0Q291Y2goKSA6IHZvaWQge1xyXG4gICAgaWYodGhpcy5kYXRhYmFzZSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IENvdWNoYmFzZSh0aGlzLkRBVEFCQVNFX05BTUUpOyAvL2NyZWF0ZSBkYiBpZiBub3QgcHJlc2VudCBvciBnZXRpbnN0YW5jZVxyXG4gICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJnZXRVc2VyRGF0YVwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcclxuICAgICAgICBpZihkb2N1bWVudC51c2VyZGF0YSkge1xyXG4gICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVXNlckRhdGFFbnRyeSh1c2VyZGF0YSA6IFVzZXJEYXRhKSA6IE51bWJlciB7XHJcbiAgICB0aGlzLmluaXRDb3VjaCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xyXG4gICAgICBcInVzZXJkYXRhXCIgOiB1c2VyZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvdWNoRGF0YSgpIHtcclxuICAgICB0aGlzLmluaXRDb3VjaCgpO1xyXG4gICAgIGxldCByb3dzID0gdGhpcy5kYXRhYmFzZS5leGVjdXRlUXVlcnkoXCJnZXRVc2VyRGF0YVwiKTtcclxuICAgICByZXR1cm4gcm93cztcclxuICB9XHJcblxyXG4gIHNldFVzZXJEYXRhKHVzZXJkYXRhIDogVXNlckRhdGEpe1xyXG4gICAgaWYodGhpcy5nZXRDb3VjaERhdGEoKS5sZW5ndGggPT0gMCkgLy8gbmV3IHVzZXJcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEpKTtcclxuICAgICAgLy8gIHRoaXMuRG9jSWQgPSB0aGlzLmNyZWF0ZVVzZXJEYXRhRW50cnkodXNlcmRhdGEpXHJcbiAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgdGhpcy5nZXRDb3VjaERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVVc2VyRGF0YShkb2NJZCwgdXNlcmRhdGEgOiBVc2VyRGF0YSlcclxuICB7XHJcbiAgICB0aGlzLmRhdGFiYXNlLnVwZGF0ZURvY3VtZW50KGRvY0lkICwgIHtcInVzZXJkYXRhXCIgOiB1c2VyZGF0YX0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMb2dnZWRJblN0YXR1cygpIDogYm9vbGVhbnsgXHJcbiAgICB0aGlzLmluaXRDb3VjaCgpO1xyXG4gICAgbGV0IHJvd3MgPSB0aGlzLmdldENvdWNoRGF0YSgpO1xyXG4gICAgaWYocm93cy5sZW5ndGggIT0gMCl7XHJcbiAgICAgIGlmKHJvd3NbMF0udXNlcmRhdGEpe1xyXG4gICAgICAgIHJldHVybiByb3dzWzBdLnVzZXJkYXRhLmlzTG9nZ2VkSW4gPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgfVxyXG59XHJcbiJdfQ==