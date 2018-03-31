"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var UserData_1 = require("../model/UserData");
var fire_base_db_service_1 = require("../services/fire-base-db.service");
var nativescript_toasty_1 = require("nativescript-toasty");
var router_1 = require("nativescript-angular/router");
var couchdb_service_1 = require("../services/couchdb.service");
var qrcode_service_1 = require("../services/qrcode.service");
var imagepicker = require("nativescript-imagepicker");
var imageSource = require("tns-core-modules/image-source");
var sampleuser_1 = require("./sampleuser");
var Utils_1 = require("../utils/Utils");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fbservice, routerExtensions, couchdb, QRcode, _changeDetectionRef) {
        this.fbservice = fbservice;
        this.routerExtensions = routerExtensions;
        this.couchdb = couchdb;
        this.QRcode = QRcode;
        this._changeDetectionRef = _changeDetectionRef;
        this.items = [];
        this.user = new UserData_1.UserData();
        this.items[0] = imageSource.fromFile("~/image/person.jpg");
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.reg = function () {
        this.fbservice.showUId();
    };
    // uncomment when using restration feature
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.fbservice.registerUser({
            email: this.user.email,
            password: this.password
        }).then(function (result) {
            //this.user.email = JSON.stringify(result);
            _this.user.firebaseID = result.uid;
            _this.createUser();
            var toast = new nativescript_toasty_1.Toasty("Registration Succesfull");
            toast.show();
            _this.fbservice.setUser(_this.userData);
            _this.signUpC();
            _this.routerExtensions.navigate(["/profile"], {
                transition: {
                    name: "fade",
                    duration: 2000,
                    curve: "linear"
                }
            });
        }, function (errorMessage) {
            //this.user.email = JSON.stringify(errorMessage);
            var toast = new nativescript_toasty_1.Toasty("Registration Failed.Try later");
            toast.show();
        });
    };
    RegisterComponent.prototype.signUpF = function () {
        var _this = this;
        this.createUser();
        this.fbservice.setUser(this.userData);
        this.fbservice.getData('/users/' + this.userData.firebaseID + '/profile_pic')
            .then(function (result) {
            _this.isOnline = JSON.stringify(result.value);
            // console.log(this.isOnline);
            _this.getstatus();
        })
            .catch(function (error) { return console.log("Error: " + error); });
    };
    RegisterComponent.prototype.getstatus = function () {
        console.log(this.isOnline);
    };
    RegisterComponent.prototype.addFriend = function () {
    };
    RegisterComponent.prototype.signUpC = function () {
        this.createUser();
        this.couchdb.setUserData(this.userData);
        this.routerExtensions.navigate(["/dashboard"], {
            transition: {
                name: "fade",
                duration: 2000,
                curve: "linear"
            }
        });
    };
    RegisterComponent.prototype.onSelectSingleTap = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    RegisterComponent.prototype.startSelection = function (context) {
        var _this = this;
        var _that = this;
        context
            .authorize()
            .then(function () {
            _that.items = [];
            return context.present();
        })
            .then(function (selection) {
            // _that.profilePic = "";
            console.log("Selection done:");
            selection.forEach(function (selected) {
                //  _that.profilePic = "";
                selected.getImage()
                    .then(function (imageSource) {
                    _this.profilePic =
                        imageSource.toBase64String("jpg"); // NULL
                    console.log(_this.profilePic);
                });
                console.log("----------------");
                console.log("uri: " + selected.uri);
                console.log("fileUri: " + selected.fileUri);
                console.log(_this.profilePic);
            });
            _that.items = selection;
            // console.log(this.profilePic);
            console.log(_this.profilePic);
            _that._changeDetectionRef.detectChanges();
        }).catch(function (e) {
            console.log(e);
        });
    };
    RegisterComponent.prototype.createUser = function () {
        //  this.userData= {
        //    name : this.user.name,
        //    profile_pic : "",
        //    email : this.user.email,
        //    isOnline : true,
        //    firebaseID : "",
        //    QRcode : this.QRcode.generateBarcode(this.user.email),
        //    messages : "",
        //    isLoggedIn : true
        //  }
        //create demo user
        sampleuser_1.data.userdata.messages.pinky.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        sampleuser_1.data.userdata.messages.ujjal2.img = Utils_1.Utils.generateBase64String(Utils_1.Utils.readImage());
        this.userData = {
            name: this.user.name,
            profile_pic: this.profilePic,
            email: this.user.email,
            isOnline: true,
            firebaseID: "vVg10raLuXfsxx4LNfPFHSrLboL2",
            QRcode: this.QRcode.generateBarcode(this.user.firebaseID),
            messages: sampleuser_1.data.userdata.messages,
            isLoggedIn: true
        };
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [fire_base_db_service_1.FireBaseDbService,
            router_1.RouterExtensions,
            couchdb_service_1.CouchdbService, qrcode_service_1.QrcodeService,
            core_1.ChangeDetectorRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLDhDQUE2QztBQUM3Qyx5RUFBcUU7QUFDckUsMkRBQTZDO0FBRTdDLHNEQUE2RDtBQUU3RCwrREFBNEQ7QUFDNUQsNkRBQXdEO0FBQ3hELHNEQUF3RDtBQUN4RCwyREFBNkQ7QUFFN0QsMkNBQW1DO0FBRW5DLHdDQUFzQztBQVF0QztJQVVFLDJCQUFvQixTQUE2QixFQUM3QixnQkFBa0MsRUFDbEMsT0FBd0IsRUFBVSxNQUFzQixFQUN4RCxtQkFBc0M7UUFIdEMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFDN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3hELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFQbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQVNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUVKLCtCQUFHLEdBQUg7UUFFRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCwwQ0FBMEM7SUFFekMsa0NBQU0sR0FBTjtRQUFBLGlCQTRCRTtRQTFCRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUN6QixLQUFLLEVBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3ZCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNiLDJDQUEyQztZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNqQixJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDYixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsWUFBWTtZQUNWLGlEQUFpRDtZQUNqRCxJQUFNLEtBQUssR0FBRyxJQUFJLDRCQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUMxRCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQ0YsQ0FBQztJQUVGLENBQUM7SUFFRixtQ0FBTyxHQUFQO1FBQUEsaUJBY0M7UUFiQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBQyxjQUFjLENBQUM7YUFDeEUsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNYLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDN0MsOEJBQThCO1lBQzlCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBRy9DLENBQUM7SUFDRCxxQ0FBUyxHQUFUO1FBRUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHFDQUFTLEdBQVQ7SUFHQSxDQUFDO0lBQ0EsbUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCw2Q0FBaUIsR0FBakI7UUFDRSxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzdCLElBQUksRUFBRSxRQUFRO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNDLDBDQUFjLEdBQWQsVUFBZSxPQUFPO1FBQXRCLGlCQWtDQztRQWpDQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsT0FBTzthQUNOLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQztZQUNGLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsU0FBUztZQUNmLHlCQUF5QjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQzNCLDBCQUEwQjtnQkFDeEIsUUFBUSxDQUFDLFFBQVEsRUFBRTtxQkFDbEIsSUFBSSxDQUFDLFVBQUMsV0FBVztvQkFDaEIsS0FBSSxDQUFDLFVBQVU7d0JBQ2YsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU87b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNQLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLGdDQUFnQztZQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMzQixLQUFLLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELHNDQUFVLEdBQVY7UUFFRSxvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2Qiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qiw0REFBNEQ7UUFDNUQsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixLQUFLO1FBRUwsa0JBQWtCO1FBQ2xCLGlCQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGFBQUssQ0FBQyxvQkFBb0IsQ0FBQyxhQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRixpQkFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxhQUFLLENBQUMsb0JBQW9CLENBQUMsYUFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLElBQUksRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsV0FBVyxFQUFHLElBQUksQ0FBQyxVQUFVO1lBQzdCLEtBQUssRUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDdkIsUUFBUSxFQUFHLElBQUk7WUFDZixVQUFVLEVBQUcsOEJBQThCO1lBQzNDLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMxRCxRQUFRLEVBQUcsaUJBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUNqQyxVQUFVLEVBQUcsSUFBSTtTQUNsQixDQUFBO0lBR0gsQ0FBQztJQXJLVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBV2dDLHdDQUFpQjtZQUNYLHlCQUFnQjtZQUN4QixnQ0FBYyxFQUFtQiw4QkFBYTtZQUNuQyx3QkFBaUI7T0FiL0MsaUJBQWlCLENBdUs3QjtJQUFELHdCQUFDO0NBQUEsQUF2S0QsSUF1S0M7QUF2S1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi9tb2RlbC9Vc2VyRGF0YSc7XHJcbmltcG9ydCB7IEZpcmVCYXNlRGJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmlyZS1iYXNlLWRiLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdHkgfSBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3R5JztcclxuXHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ291Y2hkYlNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY291Y2hkYi5zZXJ2aWNlXCJcclxuaW1wb3J0IHtRcmNvZGVTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvcXJjb2RlLnNlcnZpY2VcIlxyXG5pbXBvcnQgKiBhcyBpbWFnZXBpY2tlciBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlcGlja2VyXCI7XHJcbmltcG9ydCAqIGFzIGltYWdlU291cmNlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xyXG5cclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL3NhbXBsZXVzZXJcIlxyXG5cclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBwdWJsaWMgdXNlcjogVXNlckRhdGE7XHJcbiAgcHVibGljIHBhc3N3b3JkIDogc3RyaW5nO1xyXG4gIHB1YmxpYyB1c2VyRGF0YSA6IFVzZXJEYXRhO1xyXG4gIHB1YmxpYyBEb2NJZCA6IE51bWJlcjtcclxuICBwdWJsaWMgaXRlbXMgPSBbXTtcclxuICBwdWJsaWMgcHJvZmlsZVBpYyA6IGFueTtcclxuICBwdWJsaWMgaXNPbmxpbmUgOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmJzZXJ2aWNlIDogRmlyZUJhc2VEYlNlcnZpY2UgLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIGNvdWNoZGIgOiBDb3VjaGRiU2VydmljZSwgcHJpdmF0ZSBRUmNvZGUgOiBRcmNvZGVTZXJ2aWNlLCBcclxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcblxyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEYXRhKClcclxuICAgIHRoaXMuaXRlbXNbMF0gPSBpbWFnZVNvdXJjZS5mcm9tRmlsZShcIn4vaW1hZ2UvcGVyc29uLmpwZ1wiKVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSA6dm9pZCB7XHJcbiAgICBcclxuICAgfVxyXG5cclxucmVnKCkgOiB2b2lkXHJcbntcclxuICB0aGlzLmZic2VydmljZS5zaG93VUlkKCk7XHJcbn1cclxuLy8gdW5jb21tZW50IHdoZW4gdXNpbmcgcmVzdHJhdGlvbiBmZWF0dXJlXHJcblxyXG4gc2lnblVwKCk6IHZvaWRcclxuICB7XHJcbiAgdGhpcy5mYnNlcnZpY2UucmVnaXN0ZXJVc2VyKHtcclxuICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICBwYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcclxuICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy90aGlzLnVzZXIuZW1haWwgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgdGhpcy51c2VyLmZpcmViYXNlSUQgPSByZXN1bHQudWlkO1xyXG4gICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0eShcIlJlZ2lzdHJhdGlvbiBTdWNjZXNmdWxsXCIpO1xyXG4gICAgdG9hc3Quc2hvdygpO1xyXG4gICAgdGhpcy5mYnNlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXJEYXRhKTtcclxuICAgIHRoaXMuc2lnblVwQygpOyBcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIiBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGVycm9yTWVzc2FnZSA9PiB7XHJcbiAgICAgIC8vdGhpcy51c2VyLmVtYWlsID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3R5KFwiUmVnaXN0cmF0aW9uIEZhaWxlZC5UcnkgbGF0ZXJcIik7XHJcbiAgICAgIHRvYXN0LnNob3coKTtcclxuICAgIH1cclxuICApO1xyXG4gICBcclxuICB9XHJcblxyXG4gc2lnblVwRigpOnZvaWR7XHJcbiAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiBcclxuICB0aGlzLmZic2VydmljZS5zZXRVc2VyKHRoaXMudXNlckRhdGEpO1xyXG4gdGhpcy5mYnNlcnZpY2UuZ2V0RGF0YSgnL3VzZXJzLycrdGhpcy51c2VyRGF0YS5maXJlYmFzZUlEKycvcHJvZmlsZV9waWMnKSBcclxuIC50aGVuKHJlc3VsdCA9PiB7Ly9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpKVxyXG4gIHRoaXMuaXNPbmxpbmUgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUpXHJcbiAvLyBjb25zb2xlLmxvZyh0aGlzLmlzT25saW5lKTtcclxuIHRoaXMuZ2V0c3RhdHVzKCk7XHJcbiAgXHJcbn0pXHJcbi5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcblxyXG5cclxuIH1cclxuIGdldHN0YXR1cygpXHJcbiB7XHJcbiAgY29uc29sZS5sb2codGhpcy5pc09ubGluZSk7XHJcbiB9XHJcbiBhZGRGcmllbmQoKVxyXG4ge1xyXG5cclxuIH1cclxuICBzaWduVXBDKCk6IHZvaWR7XHJcbiAgICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIHRoaXMuY291Y2hkYi5zZXRVc2VyRGF0YSh0aGlzLnVzZXJEYXRhKTtcclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZGFzaGJvYXJkXCJdLCB7XHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNlbGVjdFNpbmdsZVRhcCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICBtb2RlOiBcInNpbmdsZVwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbn1cclxuICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICBsZXQgX3RoYXQgPSB0aGlzO1xyXG4gIFxyXG4gICAgY29udGV4dFxyXG4gICAgLmF1dGhvcml6ZSgpXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBbXTtcclxuICAgICAgICByZXR1cm4gY29udGV4dC5wcmVzZW50KCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgIC8vIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0aW9uIGRvbmU6XCIpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZCk9PiB7XHJcbiAgICAgICAgLy8gIF90aGF0LnByb2ZpbGVQaWMgPSBcIlwiO1xyXG4gICAgICAgICAgc2VsZWN0ZWQuZ2V0SW1hZ2UoKVxyXG4gICAgICAgICAgLnRoZW4oKGltYWdlU291cmNlKSA9PntcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlUGljID1cclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UudG9CYXNlNjRTdHJpbmcoXCJqcGdcIik7IC8vIE5VTExcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVyaTogXCIgKyBzZWxlY3RlZC51cmkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVVcmk6IFwiICsgc2VsZWN0ZWQuZmlsZVVyaSk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9maWxlUGljKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgX3RoYXQuaXRlbXMgPSBzZWxlY3Rpb247XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb2ZpbGVQaWMpO1xyXG4gICAgICBcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZVBpYylcclxuICAgICAgICBfdGhhdC5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGNyZWF0ZVVzZXIoKSA6IGFueVxyXG4gIHtcclxuICAgIC8vICB0aGlzLnVzZXJEYXRhPSB7XHJcbiAgICAvLyAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXHJcbiAgICAvLyAgICBwcm9maWxlX3BpYyA6IFwiXCIsXHJcbiAgICAvLyAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgIC8vICAgIGlzT25saW5lIDogdHJ1ZSxcclxuICAgIC8vICAgIGZpcmViYXNlSUQgOiBcIlwiLFxyXG4gICAgLy8gICAgUVJjb2RlIDogdGhpcy5RUmNvZGUuZ2VuZXJhdGVCYXJjb2RlKHRoaXMudXNlci5lbWFpbCksXHJcbiAgICAvLyAgICBtZXNzYWdlcyA6IFwiXCIsXHJcbiAgICAvLyAgICBpc0xvZ2dlZEluIDogdHJ1ZVxyXG4gICAgLy8gIH1cclxuXHJcbiAgICAvL2NyZWF0ZSBkZW1vIHVzZXJcclxuICAgIGRhdGEudXNlcmRhdGEubWVzc2FnZXMucGlua3kuaW1nID0gVXRpbHMuZ2VuZXJhdGVCYXNlNjRTdHJpbmcoVXRpbHMucmVhZEltYWdlKCkpO1xyXG4gICAgZGF0YS51c2VyZGF0YS5tZXNzYWdlcy51amphbDIuaW1nID0gVXRpbHMuZ2VuZXJhdGVCYXNlNjRTdHJpbmcoVXRpbHMucmVhZEltYWdlKCkpO1xyXG4gICAgXHJcbiAgICB0aGlzLnVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lIDogdGhpcy51c2VyLm5hbWUsXHJcbiAgICAgIHByb2ZpbGVfcGljIDogdGhpcy5wcm9maWxlUGljLFxyXG4gICAgICBlbWFpbCA6IHRoaXMudXNlci5lbWFpbCxcclxuICAgICAgaXNPbmxpbmUgOiB0cnVlLFxyXG4gICAgICBmaXJlYmFzZUlEIDogXCJ2VmcxMHJhTHVYZnN4eDRMTmZQRkhTckxib0wyXCIsXHJcbiAgICAgIFFSY29kZSA6IHRoaXMuUVJjb2RlLmdlbmVyYXRlQmFyY29kZSh0aGlzLnVzZXIuZmlyZWJhc2VJRCksXHJcbiAgICAgIG1lc3NhZ2VzIDogZGF0YS51c2VyZGF0YS5tZXNzYWdlcyxcclxuICAgICAgaXNMb2dnZWRJbiA6IHRydWVcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gIH1cclxuICAgXHJcbn1cclxuIl19