"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchdb_service_1 = require("../services/couchdb.service");
var CardData_1 = require("../model/CardData");
var Utils_1 = require("../utils/Utils");
var DashboardService = /** @class */ (function () {
    function DashboardService(couchdb) {
        this.couchdb = couchdb;
        this.modelData = {};
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
    }
    DashboardService.prototype.init = function () {
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
        //let messages = this.couchdb.getMessages(); 
    };
    DashboardService.prototype.prepareMainCardData = function (message) {
        var firstMessage = message[0];
    };
    DashboardService.prototype.getDashBoardData = function () {
        var messages = this.couchdb.getMessages();
        var mainCard = new CardData_1.CardData();
        mainCard.mainImage = Utils_1.Utils.readImage("~/icons/img-1.png");
        mainCard.senderID = "ujjal1";
        mainCard.senderImage = Utils_1.Utils.readImage("~/icons/img-2.png");
        mainCard.senderMessage = "Hello.. Hungry?..";
        var gridCards = [];
        for (var i = 0; i < 10; i++) {
            var temp = new CardData_1.CardData();
            temp.mainImage = Utils_1.Utils.readImage("~/icons/img-1.png");
            temp.senderID = "ujjal1";
            temp.senderImage = Utils_1.Utils.readImage("~/icons/img-9.png");
            temp.senderMessage = "Hello.. Hungry?..";
            gridCards.push(temp);
        }
        this.modelData.mainCard = mainCard;
        this.modelData.gridCard = gridCards;
        return this.modelData;
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrREFBNEQ7QUFDNUQsOENBQTRDO0FBQzVDLHdDQUFzQztBQUd0QztJQUdFLDBCQUFxQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFFLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3Qiw2Q0FBNkM7SUFDL0MsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM5QixRQUFRLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxRCxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1RCxRQUFRLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO1FBRTdDLElBQUksU0FBUyxHQUFnQixFQUFFLENBQUM7UUFFaEMsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQUssQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQXhDVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FJb0IsZ0NBQWM7T0FIbEMsZ0JBQWdCLENBeUM1QjtJQUFELHVCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBDYXJkRGF0YSB9IGZyb20gJy4uL21vZGVsL0NhcmREYXRhJ1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcclxuXHJcbiAgbW9kZWxEYXRhIDogYW55XHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlKSB7IFxyXG4gICAgdGhpcy5tb2RlbERhdGEgPXt9O1xyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IHt9O1xyXG4gICAgdGhpcy5tb2RlbERhdGEuZ3JpZENhcmQgPSB7fTtcclxuICAgIC8vbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7IFxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZU1haW5DYXJkRGF0YShtZXNzYWdlKXtcclxuICAgIGxldCBmaXJzdE1lc3NhZ2UgPSBtZXNzYWdlWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaEJvYXJkRGF0YSgpe1xyXG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XHJcbiAgICBsZXQgbWFpbkNhcmQgPSBuZXcgQ2FyZERhdGEoKTtcclxuICAgIG1haW5DYXJkLm1haW5JbWFnZSA9IFV0aWxzLnJlYWRJbWFnZShcIn4vaWNvbnMvaW1nLTEucG5nXCIpO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySUQgPSBcInVqamFsMVwiO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySW1hZ2UgPSBVdGlscy5yZWFkSW1hZ2UoXCJ+L2ljb25zL2ltZy0yLnBuZ1wiKTtcclxuICAgIG1haW5DYXJkLnNlbmRlck1lc3NhZ2UgPSBcIkhlbGxvLi4gSHVuZ3J5Py4uXCI7XHJcblxyXG4gICAgbGV0IGdyaWRDYXJkcyA6IENhcmREYXRhW10gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XHJcbiAgICAgIGxldCB0ZW1wID0gbmV3IENhcmREYXRhKCk7XHJcbiAgICAgIHRlbXAubWFpbkltYWdlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMS5wbmdcIik7XHJcbiAgICAgIHRlbXAuc2VuZGVySUQgPSBcInVqamFsMVwiO1xyXG4gICAgICB0ZW1wLnNlbmRlckltYWdlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctOS5wbmdcIik7XHJcbiAgICAgIHRlbXAuc2VuZGVyTWVzc2FnZSA9IFwiSGVsbG8uLiBIdW5ncnk/Li5cIjtcclxuICAgICAgZ3JpZENhcmRzLnB1c2godGVtcCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IG1haW5DYXJkO1xyXG4gICAgdGhpcy5tb2RlbERhdGEuZ3JpZENhcmQgPSBncmlkQ2FyZHM7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbERhdGE7XHJcbiAgfVxyXG59XHJcbiJdfQ==