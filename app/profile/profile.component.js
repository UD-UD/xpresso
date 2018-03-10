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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5RUFBa0U7QUFDbEUsdUVBQStEO0FBUS9EO0lBRUUsMEJBQW9CLGFBQWlDLEVBQVcsUUFBNEI7UUFBeEUsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQVcsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFFNUYsQ0FBQztJQUNILGtDQUFPLEdBQVA7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFQyxtQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQVhILGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQzt5Q0FHb0Msd0NBQWlCLEVBQXFCLDhDQUFrQjtPQUZqRixnQkFBZ0IsQ0FhNUI7SUFBRCx1QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RmlyZUJhc2VEYlNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZmlsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbnB1YmxpYyBsb2dzIDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgRmlyZURiU2VydmljZSA6IEZpcmVCYXNlRGJTZXJ2aWNlICwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7IFxyXG4gICAgXHJcbiAgfVxyXG5nZXRMb2dzKCk6IHZvaWRcclxue1xyXG4gIHRoaXMubG9ncyA9IHRoaXMuRmlyZURiU2VydmljZS5sb2dzO1xyXG5cclxufVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxufVxyXG4iXX0=