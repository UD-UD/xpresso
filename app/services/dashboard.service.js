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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrREFBNEQ7QUFDNUQsOENBQTRDO0FBQzVDLHdDQUFzQztBQUd0QztJQU1FLDBCQUFxQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFFLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3Qiw2Q0FBNkM7SUFDL0MsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBRUUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUU3QyxJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQWxEVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FPb0IsZ0NBQWM7T0FObEMsZ0JBQWdCLENBbUQ1QjtJQUFELHVCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcbmltcG9ydCB7IENhcmREYXRhIH0gZnJvbSAnLi4vbW9kZWwvQ2FyZERhdGEnXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcblxuICBtb2RlbERhdGEgOiBhbnlcbiAgbWFpbkltYWdlIDtcbiAgZ3JpZEltYWhlO1xuICBzZW5kZXIgOyBcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlKSB7IFxuICAgIHRoaXMubW9kZWxEYXRhID17fTtcbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IHt9O1xuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XG4gIH1cblxuICBpbml0KCl7XG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcbiAgICB0aGlzLm1vZGVsRGF0YS5ncmlkQ2FyZCA9IHt9O1xuICAgIC8vbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7IFxuICB9XG5cbiAgcHJlcGFyZU1haW5DYXJkRGF0YShtZXNzYWdlKXtcbiAgICBsZXQgZmlyc3RNZXNzYWdlID0gbWVzc2FnZVswXTtcbiAgfVxuXG4gIGdldERhc2hCb2FyZERhdGEoKXtcblxuICAgIGlmKHRoaXMubWFpbkltYWdlID09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLm1haW5JbWFnZSA9IFV0aWxzLnJlYWRJbWFnZShcIn4vaWNvbnMvaW1nLTEucG5nXCIpO1xuICAgICAgdGhpcy5zZW5kZXIgPSBVdGlscy5yZWFkSW1hZ2UoXCJ+L2ljb25zL2ltZy0yLnBuZ1wiKTtcbiAgICAgIHRoaXMuZ3JpZEltYWhlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctOS5wbmdcIik7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XG4gICAgbGV0IG1haW5DYXJkID0gbmV3IENhcmREYXRhKCk7XG4gICAgbWFpbkNhcmQubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2U7XG4gICAgbWFpbkNhcmQuc2VuZGVySUQgPSBcInVqamFsMVwiO1xuICAgIG1haW5DYXJkLnNlbmRlckltYWdlID0gdGhpcy5ncmlkSW1haGU7XG4gICAgbWFpbkNhcmQuc2VuZGVyTWVzc2FnZSA9IFwiSGVsbG8uLiBIdW5ncnk/Li5cIjtcblxuICAgIGxldCBncmlkQ2FyZHMgOiBDYXJkRGF0YVtdID0gW107XG5cbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XG4gICAgICBsZXQgdGVtcCA9IG5ldyBDYXJkRGF0YSgpO1xuICAgICAgdGVtcC5tYWluSW1hZ2UgPSB0aGlzLm1haW5JbWFnZSA7XG4gICAgICB0ZW1wLnNlbmRlcklEID0gXCJ1amphbDFcIjtcbiAgICAgIHRlbXAuc2VuZGVySW1hZ2UgPSB0aGlzLnNlbmRlcjtcbiAgICAgIHRlbXAuc2VuZGVyTWVzc2FnZSA9IFwiSGVsbG8uLiBIdW5ncnk/Li5cIjtcbiAgICAgIGdyaWRDYXJkcy5wdXNoKHRlbXApO1xuICAgIH1cbiAgICB0aGlzLm1vZGVsRGF0YS5tYWluQ2FyZCA9IG1haW5DYXJkO1xuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0gZ3JpZENhcmRzO1xuICAgIHJldHVybiB0aGlzLm1vZGVsRGF0YTtcbiAgfVxufVxuIl19