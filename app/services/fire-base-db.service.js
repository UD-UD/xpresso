"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
//import {ToolTip} from "nativescript-tooltip";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUVuRSwrQ0FBK0M7QUFHL0M7SUFHRTtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsR0FBWTtRQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR25DLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNaLFFBQVEsQ0FBQyxLQUFLLENBQ1o7WUFDRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QjtTQUNGLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUF0QixDQUFzQixDQUFDO2FBQ3RDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNFLFFBQVEsQ0FBQyxjQUFjLEVBQUU7YUFDeEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0UsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTthQUM5QixJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQXhCLENBQXdCLENBQUM7YUFDcEMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFwRFUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBcUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9ncy9kaWFsb2dzJztcclxuXHJcblxyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuXHJcbi8vaW1wb3J0IHtUb29sVGlwfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRvb2x0aXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmVCYXNlRGJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGxvZ3MgOiBhbnlcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGZpcmViYXNlKCk7XHJcbiAgfVxyXG5cclxuICBpbml0ZmlyZWJhc2UoKXtcclxuICAgIGZpcmViYXNlLmluaXQoe30pLnRoZW4oKCk9PntcclxuICAgICAgY29uc29sZS5sb2coJ0ZpcmVCYXNlIEluaXRpYWxpemVkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldERhdGEocmVmIDogc3RyaW5nKXtcclxuICAgIGZpcmViYXNlLmdldFZhbHVlKHJlZilcclxuICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQpKSlcclxuICAgIC5jYXRjaChlcnJvciA9PmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSkpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJVc2VyKHVzZXIpIDogYW55IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIHJldHVybiBmaXJlYmFzZS5jcmVhdGVVc2VyKHVzZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGxvZ2luVXNlcih1c2VyKXtcclxuICAgIGZpcmViYXNlLmxvZ2luKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzdWx0ID0+IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFVzZXIoKXtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKClcclxuICAgIC50aGVuKHVzZXIgPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB1aWQ6IFwiICsgdXNlci51aWQpXHJcbiAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpe1xyXG4gICAgZmlyZWJhc2VXZWJBcGkuYXV0aCgpLnNpZ25PdXQoKVxyXG4gICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJMb2dvdXQgT0tcIikpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gXCJMb2dvdXQgZXJyb3I6IFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICB9XHJcbn1cclxuIl19