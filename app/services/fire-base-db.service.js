"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constant_1 = require("./constant");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var observable_1 = require("tns-core-modules/data/observable");
var FireBaseDbService = /** @class */ (function () {
    function FireBaseDbService() {
        this.initfirebase();
        this.asyncData = new observable_1.Observable();
        this.asyncData.set(constant_1.Constants.TRACKER_FRIEND_ADDED, "false");
    }
    FireBaseDbService.prototype.initfirebase = function () {
        var _this = this;
        // let _that = this;
        firebase.init({
            onAuthStateChanged: function (data) {
                console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                if (data.loggedIn) {
                    _this.userId = data.user.uid;
                    console.log("user's email address: " + (JSON.stringify(data.user)));
                    console.log(_this.userId);
                    _this.addListerners();
                }
            }
        }).then(function () {
            console.log("Firebase Initialized");
        });
    };
    FireBaseDbService.prototype.addListerners = function () {
        var pathMessage = constant_1.Constants.USERS + this.userId + constant_1.Constants.MESSAGES;
        console.log(pathMessage);
        firebase.addChildEventListener(this.onChildEvent, pathMessage).then(function (listenerWrapper) {
            var path = listenerWrapper.path;
            var listeners = listenerWrapper.listeners; // an Array of listeners added
            // you can store the wrapper somewhere to later call 'removeEventListeners'
        });
    };
    FireBaseDbService.prototype.getData = function (ref) {
        return firebase.getValue(ref);
    };
    FireBaseDbService.prototype.triggerTracker = function (tackerName) {
        if (this.asyncData.get(tackerName) == "false") {
            this.asyncData.set(tackerName, "true");
        }
        else {
            this.asyncData.set(tackerName, "false");
        }
    };
    FireBaseDbService.prototype.getTracker = function () {
        return this.asyncData;
    };
    FireBaseDbService.prototype.registerUser = function (user) {
        console.log(JSON.stringify(user));
        return firebase.createUser(user);
        // this.showUId();
    };
    FireBaseDbService.prototype.showUId = function () {
        console.log(this.userId);
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
        // if(this.userId == undefined){
        //   return firebase.getCurrentUser().then(result => {
        //        this.userId = JSON.stringify(result.value);
        //       return this.userId;
        //     }).catch(error=>console.log("Error- cuurent user"));
        // }
        // else{
        //   return this.userId;
        // }
    };
    FireBaseDbService.prototype.setUser = function (user) {
        var path = constant_1.Constants.USERS + user.firebaseID;
        firebase.update(path, user);
    };
    FireBaseDbService.prototype.logout = function () {
        firebaseWebApi.auth().signOut()
            .then(function () { return console.log("Logout OK"); })
            .catch(function (error) { return "Logout error: " + JSON.stringify(error); });
    };
    FireBaseDbService.prototype.addFriend = function (friendId, friend, userId) {
        var path = constant_1.Constants.USERS + userId + constant_1.Constants.MESSAGES + friendId;
        firebase.update(path, friend);
        this.triggerTracker(constant_1.Constants.TRACKER_FRIEND_ADDED);
    };
    FireBaseDbService.prototype.checkFriendAndAdd = function (friendId, friend, userId) {
        var _this = this;
        var path = constant_1.Constants.USERS + userId + constant_1.Constants.MESSAGES + friendId;
        console.log("hi");
        console.log(path);
        this.getData(path)
            .then(function (result) {
            if (result.value != null) {
                console.log(JSON.stringify(result.value));
                console.log("friend already added");
            }
            else {
                _this.addFriend(friendId, friend, userId);
                console.log(friendId);
                console.log(userId);
            }
        })
            .catch(function (error) { return console.log("Error: " + error); });
    };
    FireBaseDbService.prototype.onChildEvent = function (result) {
        console.log("Event type: " + result.type);
        console.log("Key: " + result.key);
        console.log("Value: " + JSON.stringify(result.value));
    };
    ;
    FireBaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FireBaseDbService);
    return FireBaseDbService;
}());
exports.FireBaseDbService = FireBaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyx1Q0FBdUM7QUFDdkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsK0RBQTRJO0FBRzVJO0lBU0U7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLG9CQUFvQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQUEsaUJBZUM7UUFkQSxvQkFBb0I7UUFDbkIsUUFBUSxDQUFDLElBQUksQ0FBQztZQUVaLGtCQUFrQixFQUFFLFVBQUEsSUFBSTtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDbEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsYUFB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QU0sQ0FBQyxDQUFBO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDQSx3Q0FBWSxHQUFaLFVBQWEsTUFBTTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUFBLENBQUM7SUE1SVMsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBZ0o3QjtJQUFELHdCQUFDO0NBQUEsQUFoSkQsSUFnSkM7QUFoSlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi9jb25zdGFudCc7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tT2JqZWN0LCBmcm9tT2JqZWN0UmVjdXJzaXZlLCBQcm9wZXJ0eUNoYW5nZURhdGEsIEV2ZW50RGF0YSwgV3JhcHBlZFZhbHVlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlQmFzZURiU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBsb2dzIDogYW55XHJcbiAgcHVibGljIGN1cnJVc2VyIDogYW55XHJcbiAgcHVibGljIHVzZXJJZCA6IHN0cmluZ1xyXG4gIHB1YmxpYyBpc09ubGluZSA6IGFueTtcclxuXHJcbiAgYXN5bmNEYXRhIDogT2JzZXJ2YWJsZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmluaXRmaXJlYmFzZSgpO1xyXG4gICAgdGhpcy5hc3luY0RhdGEgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgdGhpcy5hc3luY0RhdGEuc2V0KENvbnN0YW50cy5UUkFDS0VSX0ZSSUVORF9BRERFRCxcImZhbHNlXCIpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGZpcmViYXNlKCl7XHJcbiAgIC8vIGxldCBfdGhhdCA9IHRoaXM7XHJcbiAgICBmaXJlYmFzZS5pbml0KHtcclxuXHJcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZGF0YSA9PiB7IC8vIG9wdGlvbmFsIGJ1dCB1c2VmdWwgdG8gaW1tZWRpYXRlbHkgcmUtbG9nb24gdGhlIHVzZXIgd2hlbiBoZSByZS12aXNpdHMgeW91ciBhcHBcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5sb2dnZWRJbiA/IFwiTG9nZ2VkIGluIHRvIGZpcmViYXNlXCIgOiBcIkxvZ2dlZCBvdXQgZnJvbSBmaXJlYmFzZVwiKTtcclxuICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IGRhdGEudXNlci51aWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyJ3MgZW1haWwgYWRkcmVzczogXCIgKyAoSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VyKSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcklkKTtcclxuICAgICAgICB0aGlzLmFkZExpc3Rlcm5lcnMoKTtcclxuICAgICAgfVxyXG4gICAgICB9fSkudGhlbihmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgSW5pdGlhbGl6ZWRcIilcclxuICAgICAgIH0gKVxyXG4gIH1cclxuXHJcbmFkZExpc3Rlcm5lcnMoKSA6IHZvaWR7XHJcbiAgbGV0IHBhdGhNZXNzYWdlID0gQ29uc3RhbnRzLlVTRVJTK3RoaXMudXNlcklkK0NvbnN0YW50cy5NRVNTQUdFU1xyXG4gIGNvbnNvbGUubG9nKHBhdGhNZXNzYWdlKVxyXG4gIGZpcmViYXNlLmFkZENoaWxkRXZlbnRMaXN0ZW5lcih0aGlzLm9uQ2hpbGRFdmVudCwgcGF0aE1lc3NhZ2UpLnRoZW4oXHJcbiAgICBmdW5jdGlvbihsaXN0ZW5lcldyYXBwZXIpIHtcclxuICAgICAgdmFyIHBhdGggPSBsaXN0ZW5lcldyYXBwZXIucGF0aDtcclxuICAgICAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmVyV3JhcHBlci5saXN0ZW5lcnM7IC8vIGFuIEFycmF5IG9mIGxpc3RlbmVycyBhZGRlZFxyXG4gICAgICAvLyB5b3UgY2FuIHN0b3JlIHRoZSB3cmFwcGVyIHNvbWV3aGVyZSB0byBsYXRlciBjYWxsICdyZW1vdmVFdmVudExpc3RlbmVycydcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG4gIGdldERhdGEocmVmIDogc3RyaW5nKTogYW55e1xyXG4gICAgcmV0dXJuICBmaXJlYmFzZS5nZXRWYWx1ZShyZWYpXHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyVHJhY2tlcih0YWNrZXJOYW1lKSA6IHZvaWR7XHJcbiAgICAgIGlmKHRoaXMuYXN5bmNEYXRhLmdldCh0YWNrZXJOYW1lKSA9PSBcImZhbHNlXCIpe1xyXG4gICAgICAgIHRoaXMuYXN5bmNEYXRhLnNldCh0YWNrZXJOYW1lLFwidHJ1ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHRoaXMuYXN5bmNEYXRhLnNldCh0YWNrZXJOYW1lLFwiZmFsc2VcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgZ2V0VHJhY2tlcigpe1xyXG4gICAgcmV0dXJuIHRoaXMuYXN5bmNEYXRhO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJVc2VyKHVzZXIpIDogYW55IHtcclxuICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgcmV0dXJuIGZpcmViYXNlLmNyZWF0ZVVzZXIodXNlcik7XHJcbiAgIC8vIHRoaXMuc2hvd1VJZCgpO1xyXG4gIH1cclxuICBzaG93VUlkKCkgOiB2b2lkXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2codGhpcy51c2VySWQpXHJcbiAgfVxyXG5cclxuICBsb2dpblVzZXIodXNlcikgOiBhbnl7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UubG9naW4oXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpIDphbnkge1xyXG5cclxuICAgIC8vIGlmKHRoaXMudXNlcklkID09IHVuZGVmaW5lZCl7XHJcbiAgICAvLyAgIHJldHVybiBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIC8vICAgICAgICB0aGlzLnVzZXJJZCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSk7XHJcbiAgICAvLyAgICAgICByZXR1cm4gdGhpcy51c2VySWQ7XHJcbiAgICAvLyAgICAgfSkuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKFwiRXJyb3ItIGN1dXJlbnQgdXNlclwiKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNle1xyXG4gICAgLy8gICByZXR1cm4gdGhpcy51c2VySWQ7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyKHVzZXIpXHJcbiAge1xyXG4gICAgbGV0IHBhdGggPSBDb25zdGFudHMuVVNFUlMgKyAgdXNlci5maXJlYmFzZUlEO1xyXG4gICAgZmlyZWJhc2UudXBkYXRlKHBhdGgsIHVzZXIpXHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIGZpcmViYXNlV2ViQXBpLmF1dGgoKS5zaWduT3V0KClcclxuICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTG9nb3V0IE9LXCIpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IFwiTG9nb3V0IGVycm9yOiBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBhZGRGcmllbmQoZnJpZW5kSWQgLCBmcmllbmQsIHVzZXJJZClcclxuICB7XHJcbiAgICBsZXQgcGF0aCA9IENvbnN0YW50cy5VU0VSUyArIHVzZXJJZCArIENvbnN0YW50cy5NRVNTQUdFUyArZnJpZW5kSWQ7XHJcbiAgICBmaXJlYmFzZS51cGRhdGUocGF0aCwgZnJpZW5kKVxyXG4gICAgdGhpcy50cmlnZ2VyVHJhY2tlcihDb25zdGFudHMuVFJBQ0tFUl9GUklFTkRfQURERUQpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tGcmllbmRBbmRBZGQoZnJpZW5kSWQgLCBmcmllbmQsIHVzZXJJZCl7XHJcbiAgICBsZXQgcGF0aCA9IENvbnN0YW50cy5VU0VSUyArdXNlcklkKyBDb25zdGFudHMuTUVTU0FHRVMgKyBmcmllbmRJZDtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcclxuICAgIGNvbnNvbGUubG9nKHBhdGgpXHJcbiAgICB0aGlzLmdldERhdGEocGF0aClcclxuXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICBpZihyZXN1bHQudmFsdWUhPSBudWxsKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJpZW5kIGFscmVhZHkgYWRkZWRcIilcclxuICAgICAgfVxyXG4gICAgICBlbHNlXHJcbiAgICAgIHtcclxuICAgICAgICB0aGlzLmFkZEZyaWVuZChmcmllbmRJZCAsIGZyaWVuZCwgdXNlcklkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZyaWVuZElkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJJZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcbiAgfVxyXG4gICBvbkNoaWxkRXZlbnQocmVzdWx0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkV2ZW50IHR5cGU6IFwiICsgcmVzdWx0LnR5cGUpO1xyXG4gICAgY29uc29sZS5sb2coXCJLZXk6IFwiICsgcmVzdWx0LmtleSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlZhbHVlOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSAvdXNlcnMgcGF0aFxyXG5cclxufVxyXG4iXX0=