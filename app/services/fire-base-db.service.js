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
        firebase.createUser(user).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (errorMessage) {
            console.log(JSON.stringify(errorMessage));
        });
    };
    FireBaseDbService.prototype.loginUser = function (user) {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        })
            .then(function (result) { return JSON.stringify(result); })
            .catch(function (error) { return console.log(error); });
    };
    FireBaseDbService.prototype.getCurrentUser = function () {
        firebase.getCurrentUser()
            .then(function (user) {
            console.log("User uid: " + user.uid);
            return user;
        })
            .catch(function (error) { return console.log("Trouble in paradise: " + error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUduRTtJQUVFO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFZO1FBQ2xCLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO2FBQ25ELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxJQUFJO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzFCLFVBQVUsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDWixRQUFRLENBQUMsS0FBSyxDQUNaO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQzthQUN0QyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDRSxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQ3hCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDOUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUF4QixDQUF3QixDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBeERVLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXlEN0I7SUFBRCx3QkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VEYlNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLmluaXRmaXJlYmFzZSgpOyAgXHJcbiAgfVxyXG5cclxuICBpbml0ZmlyZWJhc2UoKXtcclxuICAgIGZpcmViYXNlLmluaXQoe30pLnRoZW4oKCk9PntcclxuICAgICAgY29uc29sZS5sb2coJ0ZpcmVCYXNlIEluaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhdGEocmVmIDogc3RyaW5nKXtcclxuICAgIGZpcmViYXNlLmdldFZhbHVlKHJlZilcclxuICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcclxuICAgIC5jYXRjaChlcnJvciA9PmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSkpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJVc2VyKHVzZXIpe1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgZmlyZWJhc2UuY3JlYXRlVXNlcih1c2VyKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1c2VyKXtcclxuICAgIGZpcmViYXNlLmxvZ2luKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFVzZXIoKXtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKClcclxuICAgIC50aGVuKHVzZXIgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB1aWQ6IFwiICsgdXNlci51aWQpXHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpe1xyXG4gICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLnNpZ25PdXQoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJMb2dvdXQgT0tcIikpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gXCJMb2dvdXQgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuIl19