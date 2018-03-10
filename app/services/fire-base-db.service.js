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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQUtFO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ25CO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLENBQUE7SUFFTixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQy9CLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUVWLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDWCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDOUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBaEVVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQWlFN0I7SUFBRCx3QkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlQmFzZURiU2VydmljZSB7XG5cbiAgcHVibGljIGxvZ3MgOiBhbnlcbiAgcHVibGljIGN1cnJVc2VyIDogYW55XG4gIHB1YmxpYyB1c2VySWQgOiBhbnlcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0ZmlyZWJhc2UoKTtcbiAgfVxuXG4gIGluaXRmaXJlYmFzZSgpe1xuICAgIGZpcmViYXNlLmluaXQoe30pLnRoZW4oKCk9PntcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJlQmFzZSBJbml0aWFsaXplZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YShyZWYgOiBzdHJpbmcpe1xuICAgIGZpcmViYXNlLmdldFZhbHVlKHJlZilcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG4gICAgLmNhdGNoKGVycm9yID0+Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSk7XG4gIH1cblxuICByZWdpc3RlclVzZXIodXNlcikgOiBhbnkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih1c2VyKTtcbiAgfVxuXG4gIGxvZ2luVXNlcih1c2VyKSA6IGFueXtcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oXG4gICAgICB7XG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgfSlcblxuICB9XG5cbiAgZ2V0Q3VycmVudFVzZXIoKSA6YW55IHtcbiAgICByZXR1cm4gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxuICAgIC50aGVuKHVzZXIgPT57XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgdWlkOiBcIiArIHVzZXIudWlkKVxuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKSk7XG4gIH1cblxuICBnZXRVc2VyaWQoKSA6IGFueVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFVzZXIoKS51aWQ7XG4gIH1cblxuICBzZXRVc2VyKHVzZXIpXG4gIHtcbiAgICB2YXIgdXNlcnNSZWYgPSBmaXJlYmFzZS5jaGlsZCh0aGlzLnVzZXJJZCk7XG4gICAgdXNlcnNSZWYuc2V0KHtcbiAgICAgIHVzZXJcbiAgICB9KVxuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTG9nb3V0IE9LXCIpKVxuICAgIC5jYXRjaChlcnJvciA9PiBcIkxvZ291dCBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICB9XG59XG4iXX0=