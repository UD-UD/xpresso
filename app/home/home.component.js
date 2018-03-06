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
        this.imgSource = "";
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
        // this.imgSource = this.barcodeService.generateBarcode({
        //     name : 'Ujjal',
        //     uuid : '1234#abcd'
        // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsNkRBQTBEO0FBTzFEO0lBSUksdUJBQW9CLFFBQTRCLEVBQVMsY0FBOEI7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGaEYsU0FBSSxHQUFFLFNBQVMsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXRCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSXZCLElBQUksSUFBSSxHQUFFO1lBQ04sS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxRQUFRLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLHlEQUF5RDtRQUN6RCxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLE1BQU07SUFDVixDQUFDO0lBOUJRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBS2lDLHdDQUFpQixFQUEwQiw4QkFBYTtPQUo5RSxhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5cclxuaW1wb3J0IHsgRmlyZUJhc2VEYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFFyY29kZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBkYXRhID1cIkZiIERhdGFcIjtcclxuICAgIHB1YmxpYyBpbWdTb3VyY2UgPSBcIlwiO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZSA6IEZpcmVCYXNlRGJTZXJ2aWNlLHByaXZhdGUgYmFyY29kZVNlcnZpY2UgOiBRcmNvZGVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGVjaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB1c2VyID17XHJcbiAgICAgICAgICAgIGVtYWlsOiAnZHV0dGF1amphbDE0M0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQjYWJjZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZpcmViYXNlLnJlZ2lzdGVyVXNlcih1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBzY2FuKCl7XHJcbiAgICAgICAgdGhpcy5iYXJjb2RlU2VydmljZS5zY2FuQmFyY29kZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuaW1nU291cmNlID0gdGhpcy5iYXJjb2RlU2VydmljZS5nZW5lcmF0ZUJhcmNvZGUoe1xyXG4gICAgICAgIC8vICAgICBuYW1lIDogJ1VqamFsJyxcclxuICAgICAgICAvLyAgICAgdXVpZCA6ICcxMjM0I2FiY2QnXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcbn1cclxuIl19