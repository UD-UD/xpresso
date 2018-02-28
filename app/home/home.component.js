"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase) {
        this.firebase = firebase;
        this.data = "Fb Data";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.firebase.initfirebase();
    };
    HomeComponent.prototype.check = function () {
        console.log('clicked');
        var user = {
            email: 'duttaujjal143@gmail.com',
            password: '1234#abcd'
        };
        this.firebase.registerUser(user);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFPckU7SUFHSSx1QkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFEekMsU0FBSSxHQUFFLFNBQVMsQ0FBQztJQUV2QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxHQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXJCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUlpQyx3Q0FBaUI7T0FIdkMsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGRhdGEgPVwiRmIgRGF0YVwiO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2UgOiBGaXJlQmFzZURiU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpcmViYXNlLmluaXRmaXJlYmFzZSgpOyAgXG4gICAgfVxuXG4gICAgY2hlY2soKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHZhciB1c2VyID17XG4gICAgICAgICAgICBlbWFpbDogJ2R1dHRhdWpqYWwxNDNAZ21haWwuY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNCNhYmNkJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlyZWJhc2UucmVnaXN0ZXJVc2VyKHVzZXIpO1xuICAgIH1cbn1cbiJdfQ==