"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var couchdb_service_1 = require("../services/couchdb.service");
var CardData_1 = require("../model/CardData");
var Utils_1 = require("../utils/Utils");
var observable_1 = require("tns-core-modules/data/observable");
var fire_base_db_service_1 = require("./fire-base-db.service");
var qrcode_service_1 = require("./qrcode.service");
var MessageBox_1 = require("../model/MessageBox");
var constant_1 = require("./constant");
var DashboardService = /** @class */ (function () {
    function DashboardService(couchdb, FireDbService, QRcode) {
        this.couchdb = couchdb;
        this.FireDbService = FireDbService;
        this.QRcode = QRcode;
        this.modelData = {};
        this.modelData.mainCard = {};
        this.modelData.gridCard = {};
    }
    DashboardService.prototype.ngOnInit = function () {
        this.tracker = this.FireDbService.getTracker();
        this.tracker.addEventListener(observable_1.Observable.propertyChangeEvent, function (pcd) {
            console.log("change detected");
            switch (pcd.propertyName.toString()) {
                case constant_1.Constants.TRACKER_FRIEND_ADDED:
                    {
                        Utils_1.Utils.generateToast("Friend Added");
                        break;
                    }
            }
        });
    };
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
    DashboardService.prototype.AddFriend = function (friendId) {
        var userId;
        // this.FireDbService.getCurrentUser().then(result => {
        // userId = JSON.stringify(result.value);
        console.log("from dashboard");
        userId = "efSh0Wg9GxdqM2BSJ1eaj8zHEZV2";
        var friend = this.createFriend();
        this.FireDbService.checkFriendAndAdd(friendId, friend, userId);
        this.FireDbService.checkFriendAndAdd(userId, friend, friendId);
        // })
        // .catch(error=>console.log("Error from dashboard service - cuurent user"))
        //    }, (errorMessage) => {
        //      console.log("No scan. " + errorMessage);
        //    }
        //  );
    };
    DashboardService.prototype.createFriend = function () {
        return new MessageBox_1.MessageBox();
    };
    DashboardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [couchdb_service_1.CouchdbService, fire_base_db_service_1.FireBaseDbService, qrcode_service_1.QrcodeService])
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNEQ7QUFDNUQsOENBQTRDO0FBQzVDLHdDQUFzQztBQUN0QywrREFBNEk7QUFDNUksK0RBQTJEO0FBQzNELG1EQUFpRDtBQUNqRCxrREFBOEM7QUFDOUMsdUNBQW9DO0FBR3BDO0lBUUUsMEJBQXFCLE9BQXdCLEVBQVcsYUFBaUMsRUFBVSxNQUFzQjtRQUFwRyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFXLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3ZILElBQUksQ0FBQyxTQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsR0FBdUI7WUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxLQUFLLG9CQUFTLENBQUMsb0JBQW9CO29CQUNuQyxDQUFDO3dCQUNELGFBQUssQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUE7d0JBQ25DLEtBQUssQ0FBQztvQkFDUixDQUFDO1lBQ0gsQ0FBQztRQUVELENBQUMsQ0FBQyxDQUFDO0lB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LGdDQUFjLEVBQTJCLHdDQUFpQixFQUFtQiw4QkFBYTtPQVI5RyxnQkFBZ0IsQ0FnRzFCO0lBQUQsdUJBQUM7Q0FBQSxBQWhHSCxJQWdHRztBQWhHVSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3VjaGRiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaGRiLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBDYXJkRGF0YSB9IGZyb20gJy4uL21vZGVsL0NhcmREYXRhJ1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21PYmplY3QsIGZyb21PYmplY3RSZWN1cnNpdmUsIFByb3BlcnR5Q2hhbmdlRGF0YSwgRXZlbnREYXRhLCBXcmFwcGVkVmFsdWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tICcuL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXJjb2RlU2VydmljZSB9IGZyb20gJy4vcXJjb2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQge01lc3NhZ2VCb3h9IGZyb20gJy4uL21vZGVsL01lc3NhZ2VCb3gnXHJcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50J1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgbW9kZWxEYXRhIDogYW55XHJcbiAgbWFpbkltYWdlIDtcclxuICBncmlkSW1haGU7XHJcbiAgc2VuZGVyIDtcclxuICB0cmFja2VyIDogT2JzZXJ2YWJsZTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUgY291Y2hkYiA6IENvdWNoZGJTZXJ2aWNlICwgcHJpdmF0ZSBGaXJlRGJTZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLHByaXZhdGUgUVJjb2RlIDogUXJjb2RlU2VydmljZSkge1xyXG4gICAgdGhpcy5tb2RlbERhdGEgPXt9O1xyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy50cmFja2VyID10aGlzLkZpcmVEYlNlcnZpY2UuZ2V0VHJhY2tlcigpO1xyXG5cclxuICAgIHRoaXMudHJhY2tlci5hZGRFdmVudExpc3RlbmVyKE9ic2VydmFibGUucHJvcGVydHlDaGFuZ2VFdmVudCwgKHBjZDogUHJvcGVydHlDaGFuZ2VEYXRhKSA9PiAge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNoYW5nZSBkZXRlY3RlZFwiKTtcclxuICAgICAgc3dpdGNoKHBjZC5wcm9wZXJ0eU5hbWUudG9TdHJpbmcoKSl7XHJcbiAgICAgICAgY2FzZSBDb25zdGFudHMuVFJBQ0tFUl9GUklFTkRfQURERUQgOiBcclxuICAgICAgICB7XHJcbiAgICAgICAgVXRpbHMuZ2VuZXJhdGVUb2FzdChcIkZyaWVuZCBBZGRlZFwiKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaW5pdCgpe1xyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSB7fTtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0ge307XHJcbiAgICAvL2xldCBtZXNzYWdlcyA9IHRoaXMuY291Y2hkYi5nZXRNZXNzYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyZU1haW5DYXJkRGF0YShtZXNzYWdlKXtcclxuICAgIGxldCBmaXJzdE1lc3NhZ2UgPSBtZXNzYWdlWzBdO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGFzaEJvYXJkRGF0YSgpe1xyXG5cclxuICAgIGlmKHRoaXMubWFpbkltYWdlID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMubWFpbkltYWdlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMS5wbmdcIik7XHJcbiAgICAgIHRoaXMuc2VuZGVyID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctMi5wbmdcIik7XHJcbiAgICAgIHRoaXMuZ3JpZEltYWhlID0gVXRpbHMucmVhZEltYWdlKFwifi9pY29ucy9pbWctOS5wbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VzID0gdGhpcy5jb3VjaGRiLmdldE1lc3NhZ2VzKCk7XHJcbiAgICBsZXQgbWFpbkNhcmQgPSBuZXcgQ2FyZERhdGEoKTtcclxuICAgIG1haW5DYXJkLm1haW5JbWFnZSA9IHRoaXMubWFpbkltYWdlO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySUQgPSBcInVqamFsMVwiO1xyXG4gICAgbWFpbkNhcmQuc2VuZGVySW1hZ2UgPSB0aGlzLmdyaWRJbWFoZTtcclxuICAgIG1haW5DYXJkLnNlbmRlck1lc3NhZ2UgPSBcIkhlbGxvLi4gSHVuZ3J5Py4uXCI7XHJcblxyXG4gICAgbGV0IGdyaWRDYXJkcyA6IENhcmREYXRhW10gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKyl7XHJcbiAgICAgIGxldCB0ZW1wID0gbmV3IENhcmREYXRhKCk7XHJcbiAgICAgIHRlbXAubWFpbkltYWdlID0gdGhpcy5tYWluSW1hZ2UgO1xyXG4gICAgICB0ZW1wLnNlbmRlcklEID0gXCJ1amphbDFcIjtcclxuICAgICAgdGVtcC5zZW5kZXJJbWFnZSA9IHRoaXMuc2VuZGVyO1xyXG4gICAgICB0ZW1wLnNlbmRlck1lc3NhZ2UgPSBcIkhlbGxvLi4gSHVuZ3J5Py4uXCI7XHJcbiAgICAgIGdyaWRDYXJkcy5wdXNoKHRlbXApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5tb2RlbERhdGEubWFpbkNhcmQgPSBtYWluQ2FyZDtcclxuICAgIHRoaXMubW9kZWxEYXRhLmdyaWRDYXJkID0gZ3JpZENhcmRzO1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHB1YmxpYyBBZGRGcmllbmQoZnJpZW5kSWQpOiB2b2lkXHJcbiAge1xyXG4gICAgbGV0IHVzZXJJZCA6IGFueTtcclxuICAgLy8gdGhpcy5GaXJlRGJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gdXNlcklkID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZnJvbSBkYXNoYm9hcmRcIilcclxuICAgIHVzZXJJZCA9IFwiZWZTaDBXZzlHeGRxTTJCU0oxZWFqOHpIRVpWMlwiXHJcbiAgICBsZXQgZnJpZW5kID0gdGhpcy5jcmVhdGVGcmllbmQoKVxyXG4gICAgdGhpcy5GaXJlRGJTZXJ2aWNlLmNoZWNrRnJpZW5kQW5kQWRkKGZyaWVuZElkLGZyaWVuZCx1c2VySWQpXHJcbiAgICB0aGlzLkZpcmVEYlNlcnZpY2UuY2hlY2tGcmllbmRBbmRBZGQodXNlcklkLGZyaWVuZCxmcmllbmRJZClcclxuICAgIC8vIH0pXHJcbiAgICAvLyAuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKFwiRXJyb3IgZnJvbSBkYXNoYm9hcmQgc2VydmljZSAtIGN1dXJlbnQgdXNlclwiKSlcclxuICAgICAgXHJcblxyXG4gXHJcblxyXG4gIC8vICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4gXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gIC8vICAgIH1cclxuICAvLyAgKTtcclxuICB9XHJcbiAgcHVibGljIGNyZWF0ZUZyaWVuZCgpXHJcbiAge1xyXG4gICAgcmV0dXJuIG5ldyBNZXNzYWdlQm94KClcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIl19