"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var couch_base_db_service_1 = require("../services/couch-base-db.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase, couchbase) {
        this.firebase = firebase;
        this.couchbase = couchbase;
        this.data = "Fb Data";
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
    };
    HomeComponent.prototype.couch = function () {
        this.couchbase.createDB();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsMkVBQXFFO0FBTXJFO0lBR0ksdUJBQW9CLFFBQTRCLEVBQVUsU0FBOEI7UUFBcEUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQURqRixTQUFJLEdBQUUsU0FBUyxDQUFDO0lBRXZCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxHQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELDZCQUFLLEdBQUw7UUFFSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUF6QlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FJaUMsd0NBQWlCLEVBQXNCLDBDQUFrQjtPQUgvRSxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENvdWNoYmFzZURiU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdWNoLWJhc2UtZGIuc2VydmljZVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgZGF0YSA9XCJGYiBEYXRhXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlIDogRmlyZUJhc2VEYlNlcnZpY2UsIHByaXZhdGUgY291Y2hiYXNlIDogQ291Y2hiYXNlRGJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB1c2VyID17XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZHV0dGF1amphbDE0M0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQjYWJjZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZpcmViYXNlLnJlZ2lzdGVyVXNlcih1c2VyKTtcclxuICAgIH1cclxuICAgIGNvdWNoKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvdWNoYmFzZS5jcmVhdGVEQigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==