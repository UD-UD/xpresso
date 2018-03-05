"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var couch_base_db_service_1 = require("../services/couch-base-db.service");
var user = require("../user");
//import { Couchbase } from "nativescript-couchbase";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase, couchbase) {
        this.firebase = firebase;
        this.couchbase = couchbase;
        this.data = "Fb Data";
        //  this.database = new couchbaseModule.Couchbase("data");
        this.profile = new user.user("pinky", "motu");
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.check = function () {
        console.log('clicked');
        var user = {
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };
        this.firebase.registerUser(user);
        console.log(JSON.stringify(user));
    };
    HomeComponent.prototype.createDB = function () {
        this.documentId = this.couchbase.createDB(this.profile);
        this.retProfile = this.couchbase.getDoc(this.documentId);
        console.log(JSON.stringify(this.retProfile));
        this.couchbase.updateDoc(this.documentId);
        console.log(JSON.stringify(this.couchbase.getDoc(this.documentId)));
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, couch_base_db_service_1.CouchbaseDbService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsMkVBQXFFO0FBQ3JFLDhCQUErQjtBQUUvQixxREFBcUQ7QUFNckQ7SUFPSSx1QkFBb0IsUUFBNEIsRUFBVSxTQUE4QjtRQUFwRSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBTGpGLFNBQUksR0FBRSxTQUFTLENBQUM7UUFNckIsMERBQTBEO1FBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxNQUFNLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUl2QixJQUFJLElBQUksR0FBRTtZQUNOLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFdBQVc7U0FDeEIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVwRSxDQUFDO0lBcENLLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBUWlDLHdDQUFpQixFQUFzQiwwQ0FBa0I7T0FQL0UsYUFBYSxDQXNDekI7SUFBRCxvQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcblxyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VjaGJhc2VEYlNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb3VjaC1iYXNlLWRiLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyB1c2VyIGZyb20gJy4uL3VzZXInXHJcblxyXG4vL2ltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY291Y2hiYXNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgZGF0YSA9XCJGYiBEYXRhXCI7XHJcbiAgICBwdWJsaWMgZGF0YWJhc2UgOiBhbnlcclxuICBwcm9maWxlIDphbnlcclxuICByZXRQcm9maWxlIDogYW55XHJcbiAgICBwdWJsaWMgZG9jdW1lbnRJZCA6YW55XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlIDogRmlyZUJhc2VEYlNlcnZpY2UsIHByaXZhdGUgY291Y2hiYXNlIDogQ291Y2hiYXNlRGJTZXJ2aWNlKSB7XHJcbiAgICAgIC8vICB0aGlzLmRhdGFiYXNlID0gbmV3IGNvdWNoYmFzZU1vZHVsZS5Db3VjaGJhc2UoXCJkYXRhXCIpO1xyXG4gICAgICB0aGlzLnByb2ZpbGUgPSBuZXcgdXNlci51c2VyKFwicGlua3lcIixcIm1vdHVcIilcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHVzZXIgPXtcclxuICAgICAgICAgICAgZW1haWw6ICdkdXR0YXVqamFsMTQzQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNCNhYmNkJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmlyZWJhc2UucmVnaXN0ZXJVc2VyKHVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlREIoKSA6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudElkID0gdGhpcy5jb3VjaGJhc2UuY3JlYXRlREIodGhpcy5wcm9maWxlKTtcclxuICAgICAgICB0aGlzLnJldFByb2ZpbGUgPSB0aGlzLmNvdWNoYmFzZS5nZXREb2ModGhpcy5kb2N1bWVudElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJldFByb2ZpbGUpKVxyXG4gICAgICAgIHRoaXMuY291Y2hiYXNlLnVwZGF0ZURvYyh0aGlzLmRvY3VtZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY291Y2hiYXNlLmdldERvYyh0aGlzLmRvY3VtZW50SWQpKSlcclxuICAgICAgICBcclxuICAgICAgIH1cclxuXHJcbn1cclxuIl19