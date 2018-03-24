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
        if (this.mainImage == undefined) {
            this.mainImage = Utils_1.Utils.readImage("~/icons/img-1.png");
            this.sender = Utils_1.Utils.readImage("~/icons/img-2.png");
            this.gridImahe = Utils_1.Utils.readImage("~/icons/img-9.png");
        }
        var messages = this.couchdb.getMessages();
        var mainCard = new CardData_1.CardData();
        mainCard.mainImage = this.mainImage;
        mainCard.senderID = "ujjal1";
        mainCard.senderImage = this.gridImahe;
        mainCard.senderMessage = "Hello.. Hungry?..";
        var gridCards = [];
        for (var i = 0; i < 10; i++) {
            var temp = new CardData_1.CardData();
            temp.mainImage = this.mainImage;
            temp.senderID = "ujjal1";
            temp.senderImage = this.sender;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrREFBNEQ7QUFDNUQsOENBQTRDO0FBQzVDLHdDQUFzQztBQUd0QztJQU1FLDBCQUFxQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFFLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3Qiw2Q0FBNkM7SUFDL0MsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUU3QyxJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQWxEVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FPb0IsZ0NBQWM7T0FObEMsZ0JBQWdCLENBbUQ1QjtJQUFELHVCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBDYXJkRGF0YSB9IGZyb20gJy4uL21vZGVsL0NhcmREYXRhJ1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcclxuXHJcbiAgbW9kZWxEYXRhIDogYW55XHJcbiAgbWFpbkltYWdlIDtcclxuICBncmlkSW1haGU7XHJcbiAgc2VuZGVyIDsgXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlKSB7IFxyXG4gICAgdGhpcy5tb2RlbERhdGEgPXt9O1xyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XHJcbiAgfVxyXG5cclxuICBpbml0KCl7XHJcbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IHt9O1xyXG4gICAgdGhpcy5tb2RlbERhdGEuZ3JpZENhcmQgPSB7fTtcclxuICAgIC8vbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7IFxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZU1haW5DYXJkRGF0YShtZXNzYWdlKXtcclxuICAgIGxldCBmaXJzdE1lc3NhZ2UgPSBtZXNzYWdlWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaEJvYXJkRGF0YSgpe1xyXG5cclxuICAgIGlmKHRoaXMubWFpbkltYWdlID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMubWFpbkltYWdlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMS5wbmdcIik7XHJcbiAgICAgIHRoaXMuc2VuZGVyID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMi5wbmdcIik7XHJcbiAgICAgIHRoaXMuZ3JpZEltYWhlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctOS5wbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XHJcbiAgICBsZXQgbWFpbkNhcmQgPSBuZXcgQ2FyZERhdGEoKTtcclxuICAgIG1haW5DYXJkLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySUQgPSBcInVqamFsMVwiO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySW1hZ2UgPSB0aGlzLmdyaWRJbWFoZTtcclxuICAgIG1haW5DYXJkLnNlbmRlck1lc3NhZ2UgPSBcIkhlbGxvLi4gSHVuZ3J5Py4uXCI7XHJcblxyXG4gICAgbGV0IGdyaWRDYXJkcyA6IENhcmREYXRhW10gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XHJcbiAgICAgIGxldCB0ZW1wID0gbmV3IENhcmREYXRhKCk7XHJcbiAgICAgIHRlbXAubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2UgO1xyXG4gICAgICB0ZW1wLnNlbmRlcklEID0gXCJ1amphbDFcIjtcclxuICAgICAgdGVtcC5zZW5kZXJJbWFnZSA9IHRoaXMuc2VuZGVyO1xyXG4gICAgICB0ZW1wLnNlbmRlck1lc3NhZ2UgPSBcIkhlbGxvLi4gSHVuZ3J5Py4uXCI7XHJcbiAgICAgIGdyaWRDYXJkcy5wdXNoKHRlbXApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSBtYWluQ2FyZDtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0gZ3JpZENhcmRzO1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWxEYXRhO1xyXG4gIH1cclxufVxyXG4iXX0=