"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase/app");
var FireBaseDbService = /** @class */ (function () {
    function FireBaseDbService() {
    }
    FireBaseDbService.prototype.initfirebase = function () {
        //firebase.init({});
        //this.db = firebase.firestore();
        /*alert({
          title : "hello",
          message :"Ujjal"
    
        });
        /*this.db.collection("users").get().then((querySnapshot) => {
           querySnapshot.forEach((doc) => {
               console.log(`${doc.id} => ${doc.data()}`);
           });
         })*/
    };
    FireBaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FireBaseDbService);
    return FireBaseDbService;
}());
exports.FireBaseDbService = FireBaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUc3RDtJQUVFO0lBQ0EsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDOzs7Ozs7Ozs7YUFTSztJQUNOLENBQUM7SUFsQlMsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBbUI3QjtJQUFELHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlRGJTZXJ2aWNlIHtcbmRiIDphbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuXG4gIGluaXRmaXJlYmFzZSgpe1xuICAgIC8vZmlyZWJhc2UuaW5pdCh7fSk7XG4gICAgLy90aGlzLmRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG4gICAgLyphbGVydCh7XG4gICAgICB0aXRsZSA6IFwiaGVsbG9cIixcbiAgICAgIG1lc3NhZ2UgOlwiVWpqYWxcIlxuXG4gICAgfSk7XG4gICAgLyp0aGlzLmRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKS5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZG9jLmlkfSA9PiAke2RvYy5kYXRhKCl9YCk7XG4gICAgICAgfSk7XG4gICAgIH0pKi9cbiAgIH1cbn1cbiJdfQ==