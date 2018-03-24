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
    FireBaseDbService.prototype.getOnlineStatus = function (userId) {
        firebase.getValue('/users/' + userId + '/isOnline')
            .then(function (result) { return console.log(JSON.stringify(result.value)); })
            .catch(function (error) { return console.log("Error: " + error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQUtFO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILDJDQUFlLEdBQWYsVUFBZ0IsTUFBTTtRQUVwQixRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxNQUFNLEdBQUMsV0FBVyxDQUFDO2FBQzFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBekMsQ0FBeUMsQ0FBQzthQUN6RCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDQyx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUNuQjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFBO0lBR04sQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUMvQixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHFDQUFTLEdBQVQ7UUFFRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLElBQUk7UUFFWixnRUFBZ0U7UUFDaEUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDOUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBcEVVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXFFN0I7SUFBRCx3QkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9ncyc7XHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlRGJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGxvZ3MgOiBhbnlcclxuICBwdWJsaWMgY3VyclVzZXIgOiBhbnlcclxuICBwdWJsaWMgdXNlcklkIDogYW55XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRmaXJlYmFzZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGZpcmViYXNlKCl7XHJcbiAgICBmaXJlYmFzZS5pbml0KHt9KS50aGVuKCgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlQmFzZSBJbml0aWFsaXplZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKHJlZiA6IHN0cmluZyl7XHJcbiAgICBmaXJlYmFzZS5nZXRWYWx1ZShyZWYpXHJcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpKTtcclxuICB9XHJcbmdldE9ubGluZVN0YXR1cyh1c2VySWQpXHJcbntcclxuICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3VzZXJzLycrdXNlcklkKycvaXNPbmxpbmUnKVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcbn1cclxuICByZWdpc3RlclVzZXIodXNlcikgOiBhbnkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIodXNlcik7XHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodXNlcikgOiBhbnl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpIDphbnkge1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKClcclxuICAgIC50aGVuKHVzZXIgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB1aWQ6IFwiICsgdXNlci51aWQpXHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJpZCgpIDogYW55XHJcbiAge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFVzZXIoKS51aWQ7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyKHVzZXIpXHJcbiAge1xyXG4gIC8vICB2YXIgdXNlclJlZiA9IGZpcmViYXNlLm9iamVjdCgnLycrdXNlci5maXJlYmFzZUlEKS5zZXQodXNlcilcclxuICBmaXJlYmFzZS51cGRhdGUoJy91c2Vycy8nKyB1c2VyLmZpcmViYXNlSUQsIHVzZXIpXHJcbiAgfVxyXG4gIFxyXG4gIGxvZ291dCgpe1xyXG4gICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLnNpZ25PdXQoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJMb2dvdXQgT0tcIikpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gXCJMb2dvdXQgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuIl19