"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var couch_base_db_service_1 = require("../services/couch-base-db.service");
//import { Couchbase } from "nativescript-couchbase";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase, couchbase) {
        this.firebase = firebase;
        this.couchbase = couchbase;
        this.data = "Fb Data";
        //  this.database = new couchbaseModule.Couchbase("data");
        this.profile = {
            firstname: 'xx',
            lastname: 'yy'
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsMkVBQXFFO0FBRXJFLHFEQUFxRDtBQU1yRDtJQU9JLHVCQUFvQixRQUE0QixFQUFVLFNBQThCO1FBQXBFLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFMakYsU0FBSSxHQUFFLFNBQVMsQ0FBQztRQU1yQiwwREFBMEQ7UUFDeEQsSUFBSSxDQUFDLE9BQU8sR0FBSTtZQUVaLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxHQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQXJDSyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQVFpQyx3Q0FBaUIsRUFBc0IsMENBQWtCO09BUC9FLGFBQWEsQ0F1Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5cclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcblxyXG5pbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ291Y2hiYXNlRGJTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2gtYmFzZS1kYi5zZXJ2aWNlXCJcclxuXHJcbi8vaW1wb3J0IHsgQ291Y2hiYXNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jb3VjaGJhc2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBkYXRhID1cIkZiIERhdGFcIjtcclxuICAgIHB1YmxpYyBkYXRhYmFzZSA6IGFueVxyXG4gIHByb2ZpbGUgOmFueVxyXG4gIHJldFByb2ZpbGUgOiBhbnlcclxuICAgIHB1YmxpYyBkb2N1bWVudElkIDphbnlcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2UgOiBGaXJlQmFzZURiU2VydmljZSwgcHJpdmF0ZSBjb3VjaGJhc2UgOiBDb3VjaGJhc2VEYlNlcnZpY2UpIHtcclxuICAgICAgLy8gIHRoaXMuZGF0YWJhc2UgPSBuZXcgY291Y2hiYXNlTW9kdWxlLkNvdWNoYmFzZShcImRhdGFcIik7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlICA9IHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlyc3RuYW1lOiAneHgnLFxyXG4gICAgICAgICAgICBsYXN0bmFtZTogJ3l5J1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB1c2VyID17XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZHV0dGF1amphbDE0M0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQjYWJjZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZpcmViYXNlLnJlZ2lzdGVyVXNlcih1c2VyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgIH1cclxuICAgIGNyZWF0ZURCKCkgOiB2b2lke1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRJZCA9IHRoaXMuY291Y2hiYXNlLmNyZWF0ZURCKHRoaXMucHJvZmlsZSk7XHJcbiAgICAgICAgdGhpcy5yZXRQcm9maWxlID0gdGhpcy5jb3VjaGJhc2UuZ2V0RG9jKHRoaXMuZG9jdW1lbnRJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yZXRQcm9maWxlKSlcclxuICAgICAgIH1cclxuXHJcbn1cclxuIl19