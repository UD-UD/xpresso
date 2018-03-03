"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(FireDbService) {
        this.FireDbService = FireDbService;
    }
    ProfileComponent.prototype.getLogs = function () {
        this.logs = this.FireDbService.logs;
    };
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5RUFBa0U7QUFRbEU7SUFFRSwwQkFBb0IsYUFBaUM7UUFBakMsa0JBQWEsR0FBYixhQUFhLENBQW9CO0lBRXJELENBQUM7SUFDSCxrQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBRUMsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFYSCxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBR29DLHdDQUFpQjtPQUYxQyxnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXByb2ZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbnB1YmxpYyBsb2dzIDogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIEZpcmVEYlNlcnZpY2UgOiBGaXJlQmFzZURiU2VydmljZSkgeyBcbiAgICBcbiAgfVxuZ2V0TG9ncygpOiB2b2lkXG57XG4gIHRoaXMubG9ncyA9IHRoaXMuRmlyZURiU2VydmljZS5sb2dzO1xuXG59XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19