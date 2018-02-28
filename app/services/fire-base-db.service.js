"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var FireBaseDbService = /** @class */ (function () {
    function FireBaseDbService() {
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
    FireBaseDbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FireBaseDbService);
    return FireBaseDbService;
}());
exports.FireBaseDbService = FireBaseDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUd6RDtJQUVFO0lBQ0EsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsbUNBQU8sR0FBUCxVQUFRLEdBQVk7UUFDbEIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDckIsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQW5DLENBQW1DLENBQUM7YUFDbkQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFHLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLElBQUk7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDMUIsVUFBVSxNQUFNO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7SUEzQlUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBNkI3QjtJQUFELHdCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VEYlNlcnZpY2Uge1xuZGIgOmFueTtcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG5cbiAgaW5pdGZpcmViYXNlKCl7XG4gICAgZmlyZWJhc2UuaW5pdCh7fSkudGhlbigoKT0+e1xuICAgICAgY29uc29sZS5sb2coJ0ZpcmVCYXNlIEluaXRpYWxpemVkJyk7XG4gICAgfSk7XG4gICB9XG5cbiAgZ2V0RGF0YShyZWYgOiBzdHJpbmcpe1xuICAgIGZpcmViYXNlLmdldFZhbHVlKHJlZilcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSkpXG4gICAgLmNhdGNoKGVycm9yID0+Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSk7XG4gIH1cblxuICByZWdpc3RlclVzZXIodXNlcil7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIodXNlcikudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiJdfQ==