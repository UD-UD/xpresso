"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { FireBaseDbService } from "../fire-base-db.service"
var firebase = require("nativescript-plugin-firebase");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.data = "Fb DAta";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.check = function () {
        // ----------- FireStore Access --------------------------------------
        // firebase.initializeApp({}).then((data)=>{
        //    console.log("Init : "+data)
        // });
        // var db = firebase.firestore();
        // db.collection("users").doc('oriyFE3xEA3DV6dDydib').get().then((doc) => {
        //     if (doc.exists) {
        //         this.data =doc.data();
        //     } else {
        //         // doc.data() will be undefined in this case
        //         this.data ="No such document!";
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // });
        var _this = this;
        // //-------------------Realtime Database Access -------------------------------------------
        firebase.init({
            persist: true
        });
        firebase.getValue('/User')
            .then(function (result) { return console.log(JSON.stringify(result)); })
            .catch(function (error) { return _this.data = error; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUtsRCw4REFBOEQ7QUFFOUQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFPekQ7SUFHSTtRQURPLFNBQUksR0FBRSxTQUFTLENBQUM7SUFFdkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFHQSxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUVJLHNFQUFzRTtRQUN0RSw0Q0FBNEM7UUFDNUMsaUNBQWlDO1FBQ2pDLE1BQU07UUFDTixpQ0FBaUM7UUFDakMsMkVBQTJFO1FBQzNFLHdCQUF3QjtRQUN4QixpQ0FBaUM7UUFDakMsZUFBZTtRQUNmLHVEQUF1RDtRQUN2RCwwQ0FBMEM7UUFDMUMsUUFBUTtRQUNSLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsTUFBTTtRQWhCVixpQkEyQkM7UUFSRyw0RkFBNEY7UUFFNUYsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0wsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDekIsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUM7YUFDbkQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBdENRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQXVDekI7SUFBRCxvQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcblxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG4vLyBpbXBvcnQgeyBGaXJlQmFzZURiU2VydmljZSB9IGZyb20gXCIuLi9maXJlLWJhc2UtZGIuc2VydmljZVwiXG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGRhdGEgPVwiRmIgREF0YVwiO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgIFxuICAgICAgIFxuICAgIH1cblxuICAgIGNoZWNrKCl7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0gRmlyZVN0b3JlIEFjY2VzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHt9KS50aGVuKChkYXRhKT0+e1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkluaXQgOiBcIitkYXRhKVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdmFyIGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgICAgIC8vIGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5kb2MoJ29yaXlGRTN4RUEzRFY2ZER5ZGliJykuZ2V0KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZGF0YSA9ZG9jLmRhdGEoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgLy8gZG9jLmRhdGEoKSB3aWxsIGJlIHVuZGVmaW5lZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmRhdGEgPVwiTm8gc3VjaCBkb2N1bWVudCFcIjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tUmVhbHRpbWUgRGF0YWJhc2UgQWNjZXNzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgXG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgcGVyc2lzdDogdHJ1ZVxuICAgICAgICAgIH0pOyAgICAgXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvVXNlcicpXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZGF0YSA9IGVycm9yKTtcbiAgICB9XG59XG4iXX0=