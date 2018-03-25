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
        return firebase.getValue(ref);
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
    FireBaseDbService.prototype.addFriend = function (friendId, friend, user) {
        firebase.update('/users/' + user + '/messages/' + friendId, friend);
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
        //  var userRef = firebase.object('/'+user.firebaseID).set(user)
        firebase.update('/users/' + user.firebaseID, user);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQU1FO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ3BCLE1BQU0sQ0FBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFHSix3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNuQjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFBO0lBR04sQ0FBQztJQUVILHFDQUFTLEdBQVQsVUFBVSxRQUFRLEVBQUcsTUFBTSxFQUFFLElBQUk7UUFFN0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUUsSUFBSSxHQUFDLFlBQVksR0FBQyxRQUFRLEVBRXRELE1BQU0sQ0FFTixDQUFBO0lBRUQsQ0FBQztJQUNELDBDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUMvQixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQUk7UUFFWixnRUFBZ0U7UUFDaEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDOUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBeEVVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXlFN0I7SUFBRCx3QkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlRGJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGxvZ3MgOiBhbnlcclxuICBwdWJsaWMgY3VyclVzZXIgOiBhbnlcclxuICBwdWJsaWMgdXNlcklkIDogYW55XHJcbiAgcHVibGljIGlzT25saW5lIDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0ZmlyZWJhc2UoKTtcclxuICB9XHJcblxyXG4gIGluaXRmaXJlYmFzZSgpe1xyXG4gICAgZmlyZWJhc2UuaW5pdCh7fSkudGhlbigoKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnRmlyZUJhc2UgSW5pdGlhbGl6ZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShyZWYgOiBzdHJpbmcpOiBhbnl7XHJcbiAgcmV0dXJuICBmaXJlYmFzZS5nZXRWYWx1ZShyZWYpXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgcmVnaXN0ZXJVc2VyKHVzZXIpIDogYW55IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS5jcmVhdGVVc2VyKHVzZXIpO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVzZXIpIDogYW55e1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmxvZ2luKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcblxyXG4gIH1cclxuXHJcbmFkZEZyaWVuZChmcmllbmRJZCAsIGZyaWVuZCwgdXNlcilcclxuICB7XHJcbiAgICBmaXJlYmFzZS51cGRhdGUoJy91c2Vycy8nKyB1c2VyKycvbWVzc2FnZXMvJytmcmllbmRJZCwgXHJcbiAgXHJcbiAgIGZyaWVuZFxyXG4gIFxyXG4gIClcclxuXHJcbiAgfVxyXG4gIGdldEN1cnJlbnRVc2VyKCkgOmFueSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgLnRoZW4odXNlciA9PntcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIHVpZDogXCIgKyB1c2VyLnVpZClcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcmlkKCkgOiBhbnlcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50VXNlcigpLnVpZDtcclxuICB9XHJcblxyXG4gIHNldFVzZXIodXNlcilcclxuICB7XHJcbiAgLy8gIHZhciB1c2VyUmVmID0gZmlyZWJhc2Uub2JqZWN0KCcvJyt1c2VyLmZpcmViYXNlSUQpLnNldCh1c2VyKVxyXG4gIGZpcmViYXNlLnVwZGF0ZSgnL3VzZXJzLycrIHVzZXIuZmlyZWJhc2VJRCwgdXNlcilcclxuICB9XHJcbiAgXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBmaXJlYmFzZVdlYkFwaS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkxvZ291dCBPS1wiKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBcIkxvZ291dCBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gIH1cclxufVxyXG4iXX0=