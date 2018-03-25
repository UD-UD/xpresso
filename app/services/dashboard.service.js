"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchdb_service_1 = require("../services/couchdb.service");
var CardData_1 = require("../model/CardData");
var Utils_1 = require("../utils/Utils");
var observable_1 = require("tns-core-modules/data/observable");
var DashboardService = /** @class */ (function () {
    function DashboardService(couchdb) {
        this.couchdb = couchdb;
        this.modelData = {};
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
        this.asyncData = new observable_1.Observable();
        this.asyncData.set("change", "false");
    }
    DashboardService.prototype.init = function () {
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
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
    DashboardService.prototype.addData = function () {
        this.modelData.mainCard.senderMessage = "hellooooooo";
        this.triggerTracker();
    };
    DashboardService.prototype.triggerTracker = function () {
        if (this.asyncData.get("change") == "false") {
            this.asyncData.set("change", "true");
        }
        else {
            this.asyncData.set("change", "false");
        }
    };
    DashboardService.prototype.getTracker = function () {
        return this.asyncData;
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywrREFBNEQ7QUFDNUQsOENBQTRDO0FBQzVDLHdDQUFzQztBQUN0QywrREFBNEk7QUFHNUk7SUFRRSwwQkFBcUIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDhDQUFtQixHQUFuQixVQUFvQixPQUFPO1FBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEMsUUFBUSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztRQUU3QyxJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO1lBQ3pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFFcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLENBQUEsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBdkVVLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFO3lDQVNvQixnQ0FBYztPQVJsQyxnQkFBZ0IsQ0F3RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxuaW1wb3J0IHsgQ2FyZERhdGEgfSBmcm9tICcuLi9tb2RlbC9DYXJkRGF0YSdcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21PYmplY3QsIGZyb21PYmplY3RSZWN1cnNpdmUsIFByb3BlcnR5Q2hhbmdlRGF0YSwgRXZlbnREYXRhLCBXcmFwcGVkVmFsdWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuICBcbiAgbW9kZWxEYXRhIDogYW55XG4gIG1haW5JbWFnZSA7XG4gIGdyaWRJbWFoZTtcbiAgc2VuZGVyIDtcbiAgYXN5bmNEYXRhIDogT2JzZXJ2YWJsZTtcbiAgXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSkgeyBcbiAgICB0aGlzLm1vZGVsRGF0YSA9e307XG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcbiAgICB0aGlzLm1vZGVsRGF0YS5ncmlkQ2FyZCA9IHt9O1xuICAgIHRoaXMuYXN5bmNEYXRhID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB0aGlzLmFzeW5jRGF0YS5zZXQoXCJjaGFuZ2VcIixcImZhbHNlXCIpO1xuICB9XG4gIFxuICBpbml0KCl7XG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcbiAgICB0aGlzLm1vZGVsRGF0YS5ncmlkQ2FyZCA9IHt9O1xuICB9XG4gIFxuICBwcmVwYXJlTWFpbkNhcmREYXRhKG1lc3NhZ2Upe1xuICAgIGxldCBmaXJzdE1lc3NhZ2UgPSBtZXNzYWdlWzBdO1xuICB9XG4gIFxuICBnZXREYXNoQm9hcmREYXRhKCl7XG4gICAgaWYodGhpcy5tYWluSW1hZ2UgPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMubWFpbkltYWdlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMS5wbmdcIik7XG4gICAgICB0aGlzLnNlbmRlciA9IFV0aWxzLnJlYWRJbWFnZShcIn4vaWNvbnMvaW1nLTIucG5nXCIpO1xuICAgICAgdGhpcy5ncmlkSW1haGUgPSBVdGlscy5yZWFkSW1hZ2UoXCJ+L2ljb25zL2ltZy05LnBuZ1wiKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XG4gICAgbGV0IG1haW5DYXJkID0gbmV3IENhcmREYXRhKCk7XG4gICAgbWFpbkNhcmQubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2U7XG4gICAgbWFpbkNhcmQuc2VuZGVySUQgPSBcInVqamFsMVwiO1xuICAgIG1haW5DYXJkLnNlbmRlckltYWdlID0gdGhpcy5ncmlkSW1haGU7XG4gICAgbWFpbkNhcmQuc2VuZGVyTWVzc2FnZSA9IFwiSGVsbG8uLiBIdW5ncnk/Li5cIjtcbiAgICBcbiAgICBsZXQgZ3JpZENhcmRzIDogQ2FyZERhdGFbXSA9IFtdO1xuICAgIFxuICAgIGZvcihsZXQgaT0wO2k8MTA7aSsrKXtcbiAgICAgIGxldCB0ZW1wID0gbmV3IENhcmREYXRhKCk7XG4gICAgICB0ZW1wLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlIDtcbiAgICAgIHRlbXAuc2VuZGVySUQgPSBcInVqamFsMVwiO1xuICAgICAgdGVtcC5zZW5kZXJJbWFnZSA9IHRoaXMuc2VuZGVyO1xuICAgICAgdGVtcC5zZW5kZXJNZXNzYWdlID0gXCJIZWxsby4uIEh1bmdyeT8uLlwiO1xuICAgICAgZ3JpZENhcmRzLnB1c2godGVtcCk7XG4gICAgfVxuICAgIHRoaXMubW9kZWxEYXRhLm1haW5DYXJkID0gbWFpbkNhcmQ7XG4gICAgdGhpcy5tb2RlbERhdGEuZ3JpZENhcmQgPSBncmlkQ2FyZHM7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMubW9kZWxEYXRhO1xuICB9XG4gIFxuICBhZGREYXRhKCl7XG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQuc2VuZGVyTWVzc2FnZSA9IFwiaGVsbG9vb29vb29cIjtcbiAgICB0aGlzLnRyaWdnZXJUcmFja2VyKCk7XG4gIH1cbiAgXG4gIHRyaWdnZXJUcmFja2VyKCkgOiB2b2lke1xuICAgIGlmKHRoaXMuYXN5bmNEYXRhLmdldChcImNoYW5nZVwiKSA9PSBcImZhbHNlXCIpe1xuICAgICAgdGhpcy5hc3luY0RhdGEuc2V0KFwiY2hhbmdlXCIsXCJ0cnVlXCIpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5hc3luY0RhdGEuc2V0KFwiY2hhbmdlXCIsXCJmYWxzZVwiKTtcbiAgICB9XG4gIH1cbiAgXG4gIGdldFRyYWNrZXIoKTogT2JzZXJ2YWJsZXtcbiAgICByZXR1cm4gdGhpcy5hc3luY0RhdGE7XG4gIH1cbn1cbiJdfQ==