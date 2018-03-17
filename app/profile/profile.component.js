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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5RUFBa0U7QUFRbEU7SUFFRSwwQkFBb0IsYUFBaUM7UUFBakMsa0JBQWEsR0FBYixhQUFhLENBQW9CO0lBRXJELENBQUM7SUFDSCxrQ0FBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBRUMsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFYSCxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBR29DLHdDQUFpQjtPQUYxQyxnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlyZUJhc2VEYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ2FwcC1wcm9maWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxucHVibGljIGxvZ3MgOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBGaXJlRGJTZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UpIHsgXHJcbiAgICBcclxuICB9XHJcbmdldExvZ3MoKTogdm9pZFxyXG57XHJcbiAgdGhpcy5sb2dzID0gdGhpcy5GaXJlRGJTZXJ2aWNlLmxvZ3M7XHJcblxyXG59XHJcblxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG59XHJcbiJdfQ==