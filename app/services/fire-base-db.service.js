"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var FireBaseDbService = /** @class */ (function () {
    function FireBaseDbService() {
        this.initfirebase();
    }
    FireBaseDbService.prototype.initfirebase = function () {
        firebase.init({}).then(function () {
            console.log('FireBase Initialized');
        });
    };
    FireBaseDbService.prototype.getData = function (ref) {
        firebase.getValue(ref)
            .then(function (result) { return console.log(JSON.stringify(result)); })
            .catch(function (error) { return console.log(JSON.stringify(error)); });
    };
    FireBaseDbService.prototype.registerUser = function (user) {
        console.log(JSON.stringify(user));
        return firebase.createUser(user);
    };
    FireBaseDbService.prototype.loginUser = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        });
    };
    FireBaseDbService.prototype.getCurrentUser = function () {
        return firebase.getCurrentUser()
            .then(function (user) {
            console.log("User uid: " + user.uid);
            return user;
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
    };
    FireBaseDbService.prototype.getUserid = function () {
        return this.getCurrentUser().uid;
    };
    FireBaseDbService.prototype.setUser = function (user) {
        var usersRef = firebase.child(this.userId);
        usersRef.set({
            user: user
        });
    };
    FireBaseDbService.prototype.logout = function () {
        firebaseWebApi.auth().signOut()
            .then(function () { return console.log("Logout OK"); })
            .catch(function (error) { return "Logout error: " + JSON.stringify(error); });
    };
    FireBaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FireBaseDbService);
    return FireBaseDbService;
}());
exports.FireBaseDbService = FireBaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQUtFO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ25CO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLENBQUE7SUFFTixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQy9CLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUVWLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDWCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDOUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBaEVVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQWlFN0I7SUFBRCx3QkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlRGJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGxvZ3MgOiBhbnlcclxuICBwdWJsaWMgY3VyclVzZXIgOiBhbnlcclxuICBwdWJsaWMgdXNlcklkIDogYW55XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRmaXJlYmFzZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGZpcmViYXNlKCl7XHJcbiAgICBmaXJlYmFzZS5pbml0KHt9KS50aGVuKCgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlQmFzZSBJbml0aWFsaXplZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKHJlZiA6IHN0cmluZyl7XHJcbiAgICBmaXJlYmFzZS5nZXRWYWx1ZShyZWYpXHJcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyVXNlcih1c2VyKSA6IGFueSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih1c2VyKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1c2VyKSA6IGFueXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbihcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFVzZXIoKSA6YW55IHtcclxuICAgIHJldHVybiBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpXHJcbiAgICAudGhlbih1c2VyID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgdWlkOiBcIiArIHVzZXIudWlkKVxyXG4gICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyaWQoKSA6IGFueVxyXG4gIHtcclxuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRVc2VyKCkudWlkO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcih1c2VyKVxyXG4gIHtcclxuICAgIHZhciB1c2Vyc1JlZiA9IGZpcmViYXNlLmNoaWxkKHRoaXMudXNlcklkKTtcclxuICAgIHVzZXJzUmVmLnNldCh7XHJcbiAgICAgIHVzZXJcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIGZpcmViYXNlV2ViQXBpLmF1dGgoKS5zaWduT3V0KClcclxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTG9nb3V0IE9LXCIpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IFwiTG9nb3V0IGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==