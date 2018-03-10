"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(FireDbService, fonticon) {
        this.FireDbService = FireDbService;
        this.fonticon = fonticon;
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
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, nativescript_ng2_fonticon_1.TNSFontIconService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5RUFBa0U7QUFDbEUsdUVBQStEO0FBUS9EO0lBRUUsMEJBQW9CLGFBQWlDLEVBQVcsUUFBNEI7UUFBeEUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQVcsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFFNUYsQ0FBQztJQUNILGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFQyxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQVhILGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FHb0Msd0NBQWlCLEVBQXFCLDhDQUFrQjtPQUZqRixnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpcmVCYXNlRGJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9maXJlLWJhc2UtZGIuc2VydmljZSdcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xucHVibGljIGxvZ3MgOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgRmlyZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlICwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IFxuICAgIFxuICB9XG5nZXRMb2dzKCk6IHZvaWRcbntcbiAgdGhpcy5sb2dzID0gdGhpcy5GaXJlRGJTZXJ2aWNlLmxvZ3M7XG5cbn1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=