"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var qrcode_service_1 = require("../services/qrcode.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase, barcodeService) {
        this.firebase = firebase;
        this.barcodeService = barcodeService;
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
    HomeComponent.prototype.scan = function () {
        this.barcodeService.scanBarcode();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService, qrcode_service_1.QrcodeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsNkRBQTBEO0FBTzFEO0lBR0ksdUJBQW9CLFFBQTRCLEVBQVMsY0FBOEI7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFEaEYsU0FBSSxHQUFFLFNBQVMsQ0FBQztJQUV2QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUl2QixJQUFJLElBQUksR0FBRTtZQUNOLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLFdBQVc7U0FDeEIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBekJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSWlDLHdDQUFpQixFQUEwQiw4QkFBYTtPQUg5RSxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgUXJjb2RlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9xcmNvZGUuc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGRhdGEgPVwiRmIgRGF0YVwiO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2UgOiBGaXJlQmFzZURiU2VydmljZSxwcml2YXRlIGJhcmNvZGVTZXJ2aWNlIDogUXJjb2RlU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgIFxuICAgIH1cblxuICAgIGNoZWNrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgdXNlciA9e1xuICAgICAgICAgICAgZW1haWw6ICdkdXR0YXVqamFsMTQzQGdtYWlsLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQjYWJjZCdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpcmViYXNlLnJlZ2lzdGVyVXNlcih1c2VyKTtcbiAgICB9XG5cbiAgICBzY2FuKCl7XG4gICAgICAgIHRoaXMuYmFyY29kZVNlcnZpY2Uuc2NhbkJhcmNvZGUoKTtcbiAgICB9XG59XG4iXX0=