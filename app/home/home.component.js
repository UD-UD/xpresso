"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var qrcode_service_1 = require("../services/qrcode.service");
var couchbaseModule = require("nativescript-couchbase");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(firebase, barcodeService) {
        this.firebase = firebase;
        this.barcodeService = barcodeService;
        this.data = "Fb Data";
        this.imgSource = "";
        this.database = new couchbaseModule.Couchbase("test-database");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.documentId = this.database.createDocument({
            "firstname": "Nic",
            "lastname": "Raboy",
            "address": {
                "city": "San Francisco",
                "state": "CA",
                "country": "USA"
            },
            "twitter": "https://www.twitter.com/nraboy"
        });
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
        //this.barcodeService.scanBarcode();
        // this.imgSource = this.barcodeService.generateBarcode({
        //     name : 'Ujjal',
        //     uuid : '1234#abcd'
        // });
        console.log("DocID : " + JSON.stringify(this.documentId));
        var person = this.database.getDocument(this.documentId);
        console.log("Data :" + JSON.stringify(person));
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
/**
 * For Android XML error : remove and rebuild
 * for : dexoverflow : see app.gradle in app_resource
 */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRCx5RUFBcUU7QUFFckUsNkRBQTBEO0FBRTFELElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBTzFEO0lBUUksdUJBQW9CLFFBQTRCLEVBQVMsY0FBOEI7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOaEYsU0FBSSxHQUFFLFNBQVMsQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBTWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUMzQyxXQUFXLEVBQUUsS0FBSztZQUNsQixVQUFVLEVBQUUsT0FBTztZQUNuQixTQUFTLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1lBQ0QsU0FBUyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFJdkIsSUFBSSxJQUFJLEdBQUU7WUFDTixLQUFLLEVBQUUseUJBQXlCO1lBQ2hDLFFBQVEsRUFBRSxXQUFXO1NBQ3hCLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLG9DQUFvQztRQUNwQyx5REFBeUQ7UUFDekQsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixNQUFNO1FBRU4sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUV4RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFqRFEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FTaUMsd0NBQWlCLEVBQTBCLDhCQUFhO09BUjlFLGFBQWEsQ0FrRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYTtBQW1EMUI7OztHQUdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmUtYmFzZS1kYi5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFFyY29kZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxuXG5jb25zdCBjb3VjaGJhc2VNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgZGF0YSA9XCJGYiBEYXRhXCI7XG4gICAgcHVibGljIGltZ1NvdXJjZSA9IFwiXCI7XG4gICAgcHVibGljIGRhdGFiYXNlO1xuXG4gICAgcHVibGljIGRvY3VtZW50SWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlIDogRmlyZUJhc2VEYlNlcnZpY2UscHJpdmF0ZSBiYXJjb2RlU2VydmljZSA6IFFyY29kZVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBjb3VjaGJhc2VNb2R1bGUuQ291Y2hiYXNlKFwidGVzdC1kYXRhYmFzZVwiKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudElkID0gdGhpcy5kYXRhYmFzZS5jcmVhdGVEb2N1bWVudCh7XG4gICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIk5pY1wiLFxuICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBcIlJhYm95XCIsXG4gICAgICAgICAgICBcImFkZHJlc3NcIjoge1xuICAgICAgICAgICAgICAgIFwiY2l0eVwiOiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgICAgICAgICAgICBcInN0YXRlXCI6IFwiQ0FcIixcbiAgICAgICAgICAgICAgICBcImNvdW50cnlcIjogXCJVU0FcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHdpdHRlclwiOiBcImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL25yYWJveVwiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgdXNlciA9e1xuICAgICAgICAgICAgZW1haWw6ICdkdXR0YXVqamFsMTQzQGdtYWlsLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJzEyMzQjYWJjZCdcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpcmViYXNlLnJlZ2lzdGVyVXNlcih1c2VyKTtcbiAgICB9XG5cbiAgICBzY2FuKCl7XG4gICAgICAgIC8vdGhpcy5iYXJjb2RlU2VydmljZS5zY2FuQmFyY29kZSgpO1xuICAgICAgICAvLyB0aGlzLmltZ1NvdXJjZSA9IHRoaXMuYmFyY29kZVNlcnZpY2UuZ2VuZXJhdGVCYXJjb2RlKHtcbiAgICAgICAgLy8gICAgIG5hbWUgOiAnVWpqYWwnLFxuICAgICAgICAvLyAgICAgdXVpZCA6ICcxMjM0I2FiY2QnXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9jSUQgOiBcIitKU09OLnN0cmluZ2lmeSh0aGlzLmRvY3VtZW50SWQpKTtcblxuICAgICAgICB2YXIgcGVyc29uID0gdGhpcy5kYXRhYmFzZS5nZXREb2N1bWVudCh0aGlzLmRvY3VtZW50SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgOlwiK0pTT04uc3RyaW5naWZ5KHBlcnNvbikpO1xuICAgIH1cbn1cbi8qKlxuICogRm9yIEFuZHJvaWQgWE1MIGVycm9yIDogcmVtb3ZlIGFuZCByZWJ1aWxkXG4gKiBmb3IgOiBkZXhvdmVyZmxvdyA6IHNlZSBhcHAuZ3JhZGxlIGluIGFwcF9yZXNvdXJjZVxuICovIl19