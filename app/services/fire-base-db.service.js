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
        firebase.getValue(ref);
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
    FireBaseDbService.prototype.addFriend = function (friendId, friend, user) {
        firebase.update('/users/' + user.firebaseID + '/messages/' + friendId, {
            chats: {},
            img: friend.profilepic,
            isOnline: friend.isOnline
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQU1FO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUdKLHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQ25CO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLENBQUE7SUFHTixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQy9CLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUVFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBSTtRQUVaLGdFQUFnRTtRQUNoRSxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDRCxxQ0FBUyxHQUFULFVBQVUsUUFBUSxFQUFHLE1BQU0sRUFBRSxJQUFJO1FBRS9CLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFFLElBQUksQ0FBQyxVQUFVLEdBQUMsWUFBWSxHQUFDLFFBQVEsRUFDbEU7WUFDRSxLQUFLLEVBQUcsRUFBRTtZQUNWLEdBQUcsRUFBRyxNQUFNLENBQUMsVUFBVTtZQUN2QixRQUFRLEVBQUcsTUFBTSxDQUFDLFFBQVE7U0FDM0IsQ0FDQSxDQUFBO0lBRUQsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO2FBQzlCLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQzthQUNwQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQXpFVSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTs7T0FDQSxpQkFBaUIsQ0EwRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTFFRCxJQTBFQztBQTFFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlQmFzZURiU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBsb2dzIDogYW55XHJcbiAgcHVibGljIGN1cnJVc2VyIDogYW55XHJcbiAgcHVibGljIHVzZXJJZCA6IGFueVxyXG4gIHB1YmxpYyBpc09ubGluZSA6IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGZpcmViYXNlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0ZmlyZWJhc2UoKXtcclxuICAgIGZpcmViYXNlLmluaXQoe30pLnRoZW4oKCk9PntcclxuICAgICAgY29uc29sZS5sb2coJ0ZpcmVCYXNlIEluaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhdGEocmVmIDogc3RyaW5nKTogYW55e1xyXG4gICAgZmlyZWJhc2UuZ2V0VmFsdWUocmVmKVxyXG4gICAgIH1cclxuXHJcblxyXG4gIHJlZ2lzdGVyVXNlcih1c2VyKSA6IGFueSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih1c2VyKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1c2VyKSA6IGFueXtcclxuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbihcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRVc2VyKCkgOmFueSB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgLnRoZW4odXNlciA9PntcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIHVpZDogXCIgKyB1c2VyLnVpZClcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlcmlkKCkgOiBhbnlcclxuICB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50VXNlcigpLnVpZDtcclxuICB9XHJcblxyXG4gIHNldFVzZXIodXNlcilcclxuICB7XHJcbiAgLy8gIHZhciB1c2VyUmVmID0gZmlyZWJhc2Uub2JqZWN0KCcvJyt1c2VyLmZpcmViYXNlSUQpLnNldCh1c2VyKVxyXG4gIGZpcmViYXNlLnVwZGF0ZSgnL3VzZXJzLycrIHVzZXIuZmlyZWJhc2VJRCwgdXNlcilcclxuICB9XHJcbiAgYWRkRnJpZW5kKGZyaWVuZElkICwgZnJpZW5kLCB1c2VyKVxyXG4gIHtcclxuICAgIGZpcmViYXNlLnVwZGF0ZSgnL3VzZXJzLycrIHVzZXIuZmlyZWJhc2VJRCsnL21lc3NhZ2VzLycrZnJpZW5kSWQsIFxyXG4gIHtcclxuICAgIGNoYXRzIDoge30sXHJcbiAgICBpbWcgOiBmcmllbmQucHJvZmlsZXBpYyxcclxuICAgIGlzT25saW5lIDogZnJpZW5kLmlzT25saW5lXHJcbiAgfVxyXG4gIClcclxuXHJcbiAgfVxyXG4gIGxvZ291dCgpe1xyXG4gICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLnNpZ25PdXQoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJMb2dvdXQgT0tcIikpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gXCJMb2dvdXQgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuIl19