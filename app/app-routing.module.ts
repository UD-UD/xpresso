import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "login", loadChildren: "./login/login.module#LoginModule"},
    { path: "register", loadChildren: "./register/register.module#RegisterModule"},
    { path: "profile", loadChildren: "./profile/profile.module#ProfileModule"},
    { path: "edit-profile", loadChildren: "./edit-profile/edit-profile.module#EditProfileModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
