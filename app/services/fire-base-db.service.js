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
        firebase.createUser(user).then(function (result) {
            console.log(JSON.stringify(result));
            this.logs = JSON.stringify(result);
            //  var tip = new ToolTip({},{text: JSON.stringify(result)});
            //  tip.show();
        }, function (errorMessage) {
            console.log(JSON.stringify(errorMessage));
            this.logs = JSON.stringify(errorMessage);
            //  var tip = new ToolTip({},{text: JSON.stringify(errorMessage)});
            //  tip.show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZS1iYXNlLWRiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlLWJhc2UtZGIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUVuRSwrQ0FBK0M7QUFHL0M7SUFHRTtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsR0FBWTtRQUNsQixRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzthQUNuRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMxQixVQUFVLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEMsNkRBQTZEO1lBQzdELGVBQWU7UUFDZixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUzQyxtRUFBbUU7WUFDbkUsZUFBZTtRQUVmLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1osUUFBUSxDQUFDLEtBQUssQ0FDWjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQXRCLENBQXNCLENBQUM7YUFDdEMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0UsUUFBUSxDQUFDLGNBQWMsRUFBRTthQUN4QixJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO2FBQzlCLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQzthQUNwQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQWpFVSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTs7T0FDQSxpQkFBaUIsQ0FrRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzL2RpYWxvZ3MnO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuLy9pbXBvcnQge1Rvb2xUaXB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9vbHRpcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZUJhc2VEYlNlcnZpY2Uge1xyXG5cclxuICBwdWJsaWMgbG9ncyA6IGFueVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0ZmlyZWJhc2UoKTtcclxuICB9XHJcblxyXG4gIGluaXRmaXJlYmFzZSgpe1xyXG4gICAgZmlyZWJhc2UuaW5pdCh7fSkudGhlbigoKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnRmlyZUJhc2UgSW5pdGlhbGl6ZWQnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShyZWYgOiBzdHJpbmcpe1xyXG4gICAgZmlyZWJhc2UuZ2V0VmFsdWUocmVmKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlclVzZXIodXNlcil7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHVzZXIpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICB0aGlzLmxvZ3MgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpXHJcbiAgICAgICAgLy8gIHZhciB0aXAgPSBuZXcgVG9vbFRpcCh7fSx7dGV4dDogSlNPTi5zdHJpbmdpZnkocmVzdWx0KX0pO1xyXG4gICAgICAgIC8vICB0aXAuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICB0aGlzLmxvZ3MgPSBKU09OLnN0cmluZ2lmeShlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLy8gIHZhciB0aXAgPSBuZXcgVG9vbFRpcCh7fSx7dGV4dDogSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKX0pO1xyXG4gICAgICAgIC8vICB0aXAuc2hvdygpO1xyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbG9naW5Vc2VyKHVzZXIpe1xyXG4gICAgZmlyZWJhc2UubG9naW4oXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50VXNlcigpe1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKVxyXG4gICAgLnRoZW4odXNlciA9PntcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIHVpZDogXCIgKyB1c2VyLnVpZClcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBmaXJlYmFzZVdlYkFwaS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZyhcIkxvZ291dCBPS1wiKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBcIkxvZ291dCBlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gIH1cclxufVxyXG4iXX0=